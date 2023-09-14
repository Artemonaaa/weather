import { Component, Input, OnInit } from '@angular/core';
import { interval, switchMap } from 'rxjs';

import { IUser } from '../../models/user';
import { IWeather } from 'src/app/models/wether';

import { WeatherService } from './../../services/weather.services';3

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
})

export class UserComponent implements OnInit {
  constructor(private weatherService: WeatherService, public sharedService: SharedService) {}
  @Input() user: IUser
  @Input() isFavorite: boolean

  weather: IWeather = {
    hourly: {
      temperature_2m: [],
    },
    daily: {
      weathercode: []
    },
  }
  
  ngOnInit(): void {
    this.weatherService.getAll(+this.user.location.coordinates.latitude, +this.user.location.coordinates.longitude).subscribe(weather => {
      this.weather = weather
    })

    const intervalTime = 3600000;

    interval(intervalTime).pipe(
      switchMap(() => this.weatherService.getAll(+this.user.location.coordinates.latitude, +this.user.location.coordinates.longitude))
    ).subscribe((weather) => {
      this.weather = weather;
    });
  }

  getWeatherIcon() {
    if(this.weather.daily.weathercode[0] === undefined) return
    return this.sharedService.getValueByNumber(this.weather.daily.weathercode[0]);
  }

  getCurrentTemp(): number {
    return this.weather.hourly.temperature_2m[this.sharedService.getSharedVariable()]
  }

  getLowestTemp(): number {
    return Math.min(...this.weather.hourly.temperature_2m)
  }

  getHighestTemp(): number {
    return Math.max(...this.weather.hourly.temperature_2m)
  }
  
  setToLocalStorage(): void { 
    localStorage.setItem(this.user.name.last, JSON.stringify(this.user))
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IWeather } from '../models/wether';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getAll(latitude: number, longitude: number): Observable<IWeather> {
    return this.http.get<IWeather>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=GMT&forecast_days=1`)
  }
}

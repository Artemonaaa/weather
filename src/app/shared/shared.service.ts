// @ts-nocheck
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

let weatherInterpretationCodes = {
  '0' : 'assets/icons/clearSky.png', //+
  '1,2,3' : 'assets/icons/mainlyClearSky.png', //+
  '45,48' : 'assets/icons/fog.png',  //+
  '51,53,55' : 'assets/icons/drizzle.png', //+
  '56,57' : 'assets/icons/freezingDrizzle.png',  //+
  '61,63,65' : 'assets/icons/rainSlight.png', //+ 
  '66,67' : 'assets/icons/freezingRain.png',  //+
  '71,73,75' : 'assets/icons/snowFall.png',  //+
  '77' : 'assets/icons/snowGrains.png',  //+
  '80,81,82' : 'assets/icons/rainShowers.png',  //+
  '85,86' : 'assets/icons/snowShowers.png',  //+
  '95' : 'assets/icons/thunderstorm.png',  
  '96,99' : 'assets/icons/thunderstorm.png',  
}

export class SharedService {
  currentTime = new Date().getHours()

  getSharedVariable() {
    return this.currentTime
  }

  getValueByNumber(number: number) {
    for (let key in weatherInterpretationCodes) {
      let parts = key.split(',');
      
      if (parts.includes(number.toString())) {
        return weatherInterpretationCodes[key];
      }
    }
  }
}
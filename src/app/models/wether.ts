export interface IWeather { 
  hourly: {
    temperature_2m: number[],
  }
  daily: {
    weathercode: number[]
  },
}
export interface IUsersInfo {
  info: object,
  results: IUser[]
}

export interface IUser { 
  name: TUserName,
  gender: string,
  picture: TUserPicture,
  location: TUserLocation,
  email: string 
}

type TUserName = {
  first: string,
  last: string,
  title: string
}

type TUserPicture = {
  large: string,
  medium: string,
  thumbnail: string
}

type TUserLocation = {
  city: string,
  coordinates: {
    latitude: string,
    longitude: string
  },
  country: string
}


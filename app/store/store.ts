import { create } from "zustand";

// 和风天气
type WeatherNow = {
  now: {
    temp: number;
    feelsLike: number;
    icon: number;
    text: string;
    wind360: number;
    windDir: string;
    windScale: number;
    windSpeed: number;
    humidity: number;
    precip: number;
    pressure: number;
    vis: number;
    cloud: number;
    dew: number;
  };
};

type WeatherDay = {
  daily: {
    fxDate: string;
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moonPhase: string;
    moonPhaseIcon: number;
    tempMax: number;
    tempMin: number;
    iconDay: string;
    textDay: string;
    iconNight: string;
    textNight: string;
    wind360Day: number;
    windDirDay: string;
    windScaleDay: number;
    windSpeedDay: number;
    wind360Night: number;
    windDirNight: string;
    windScaleNight: number;
    windSpeedNight: number;
    humidity: number;
    precip: number;
    pressure: number;
    vis: number;
    cloud: number;
    uvIndex: number;
  }[];
};

interface WeatherState {
  locationId: number | null;
  setLocationId: (locationId: number) => void;
  location: string | null;
  setLocation: (location: string) => void;
  weatherNow: WeatherNow | null;
  setWeatherNow: (weatherNow: WeatherNow) => void;
  weatherDay: WeatherDay | null;
  setWeatherDay: (weatherDay: WeatherDay) => void;
  loadingCurrentWeather: boolean;
  setLoadingCurrentWeather: (loadingCurrentWeather: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  locationId: null,
  setLocationId: (locationId: number) => set({ locationId }),
  location: null,
  setLocation: (location: string) => set({ location }),
  weatherNow: null,
  setWeatherNow: (weatherNow: WeatherNow) => set({ weatherNow }),
  weatherDay: null,
  setWeatherDay: (weatherDay: WeatherDay) => set({ weatherDay }),
  loadingCurrentWeather: false,
  setLoadingCurrentWeather: (loadingCurrentWeather: boolean) =>
    set({ loadingCurrentWeather }),
  error: null,
  setError: (error: string | null) => set({ error }),
}));

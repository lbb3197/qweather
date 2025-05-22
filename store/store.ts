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

type HourlyWeather = {
  hourly: {
    fxTime: string;
    temp: number;
    icon: number;
    text: string;
    wind360: number;
    windDir: string;
    windScale: string;
    windSpeed: number;
    humidity: number;
    precip: number;
    pop: number;
    pressure: number;
    cloud: number;
    dew: number;
  }[];
};

type suggestion = {
  daily: {
    date: string;
    type: number;
    name: string;
    level: number;
    category: string;
    text: string;
  }[];
};

interface WeatherState {
  error: string | null;
  loadingCurrentWeather: boolean;
  location: string | null;
  locationId: number | null;
  weatherNow: WeatherNow | null;
  weatherDay: WeatherDay | null;
  hourlyWeather: HourlyWeather | null;
  suggestion: suggestion | null;
  setLocationId: (locationId: number) => void;
  setLocation: (location: string) => void;
  setWeatherNow: (weatherNow: WeatherNow) => void;
  setWeatherDay: (weatherDay: WeatherDay) => void;
  setHourlyWeather: (hourlyWeather: HourlyWeather) => void;
  setSuggestion: (suggestion: suggestion) => void;
  setLoadingCurrentWeather: (loadingCurrentWeather: boolean) => void;
  setError: (error: string | null) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  error: null,
  loadingCurrentWeather: false,
  location: null,
  locationId: null,
  weatherNow: null,
  weatherDay: null,
  hourlyWeather: null,
  suggestion: null,
  setLocationId: (locationId: number) => set({ locationId }),
  setLocation: (location: string) => set({ location }),
  setWeatherNow: (weatherNow: WeatherNow) => set({ weatherNow }),
  setWeatherDay: (weatherDay: WeatherDay) => set({ weatherDay }),
  setHourlyWeather: (hourlyWeather: HourlyWeather) => set({ hourlyWeather }),
  setSuggestion: (suggestion: suggestion) => set({ suggestion }),
  setLoadingCurrentWeather: (loadingCurrentWeather: boolean) =>
    set({ loadingCurrentWeather }),
  setError: (error: string | null) => set({ error }),
}));

import {
  fetchLocation,
  fetchCurrentWeatherhefeng,
  fetchWeatherDay,
  fetchSuggestion,
  fetchHourlyWeather,
} from "@/api/hefeng-weather";
import { useWeatherStore } from "./store";

export const fetchWeatherNow = async (location: string) => {
  const {
    setLoadingCurrentWeather,
    setError,
    setLocationId,
    setLocation,
    setWeatherNow,
    setWeatherDay,
    setHourlyWeather,
    setSuggestion,
  } = useWeatherStore.getState();

  try {
    setLoadingCurrentWeather(true); // 开始加载
    setError(null); // 清除旧错误

    const data = await fetchLocation(location); // 请求天气数据
    setLocationId(data.location[0].id); // 更新天气数据
    setLocation(
      `${data.location[0].adm1},${data.location[0].adm2},${data.location[0].name}`
    );

    // 实时天气数据
    const currentWeather = await fetchCurrentWeatherhefeng(data.location[0].id);
    setWeatherNow(currentWeather);

    // 今日天气数据
    const weatherDay = await fetchWeatherDay(data.location[0].id);
    setWeatherDay(weatherDay);

    // 小时天气数据
    const hourlyWeather = await fetchHourlyWeather(data.location[0].id);
    setHourlyWeather(hourlyWeather);

    //天气指数
    const suggestion = await fetchSuggestion(data.location[0].id);
    setSuggestion(suggestion);
  } catch (error: unknown) {
    setError(error instanceof Error ? error.message : "无法获取天气数据"); // 设置错误信息
  } finally {
    setLoadingCurrentWeather(false); // 停止加载
  }
};

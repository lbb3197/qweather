import { useWeatherStore } from "../../store/store";
import { useState } from "react";
import { fetchWeatherNow } from "../../store/action";
import "qweather-icons/font/qweather-icons.css";
import Loading from "../loading";

const NowCard = () => {
  const { loadingCurrentWeather, error, weatherNow, location } =
    useWeatherStore();
  const [city, setCity] = useState("");

  const handleFetchWeather = async () => {
    await fetchWeatherNow(city);
    setCity(""); // 清空输入框
  };

  return (
    <div>
      <h1>天气预报</h1>
      <input
        type="text"
        placeholder="请输入城市名称"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>获取天气</button>

      {loadingCurrentWeather && <Loading />}
      {error && <p>错误: {error}</p>}
      {weatherNow && (
        <div>
          <h2>实时天气</h2>
          <p>城市: {location}</p>
          <p>温度: {weatherNow.now.temp}°C</p>
          <p>体感温度: {weatherNow.now.feelsLike}°C</p>
          <i className={`qi-${weatherNow.now.icon}`}></i>
          <span>天气: {weatherNow.now.text}</span>
          <p>风速: {weatherNow.now.windSpeed}km/h</p>
          <p>风向: {weatherNow.now.windDir}</p>
          <p>风力: {weatherNow.now.windScale}</p>
          <p>湿度: {weatherNow.now.humidity}%</p>
          <p>过去一小时降水量: {weatherNow.now.precip}mm</p>
          <p>大气压强: {weatherNow.now.pressure}hPa</p>
          <p>能见度: {weatherNow.now.vis}km</p>
          <p>云量: {weatherNow.now.cloud}%</p>
          <p>露点温度: {weatherNow.now.dew}°C</p>
        </div>
      )}
    </div>
  );
};

export default NowCard;

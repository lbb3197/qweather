import { useWeatherStore } from "../../store/store";
import "qweather-icons/font/qweather-icons.css";

const HoursCard = () => {
  const { hourlyWeather } = useWeatherStore();
  return (
    <div>
      <h1>24小时天气</h1>
      <div>
        {hourlyWeather?.hourly.map((item) => (
          <div key={item.fxTime}>
            <p>时间：{item.fxTime}</p>
            <p>温度：{item.temp}</p>
            <i className={`qweather-icon-${item.icon}`}></i>
            <p>天气：{item.text}</p>
            <p>风向：{item.windDir}</p>
            <p>风力：{item.windScale}</p>
            <p>风速：{item.windSpeed}</p>
            <p>湿度：{item.humidity}%</p>
            <p>降水概率：{item.pop}%</p>
            <p>过去一小时降水量：{item.precip}mm</p>
            <p>气压：{item.pressure}hPa</p>
            <p>云量：{item.cloud}%</p>
            <p>露点温度：{item.dew}℃</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoursCard;

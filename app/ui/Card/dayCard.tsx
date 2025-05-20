import { useWeatherStore } from "../../store/store";

const DayCard = () => {
  const { weatherDay } = useWeatherStore();
  return (
    <div>
      <h1>未来三日天气</h1>
      <div>
        {weatherDay &&
          weatherDay.daily.map((item) => (
            <div key={item.fxDate}>
              <p>{item.fxDate}</p>
              <p>日出时间：{item.sunrise}</p>
              <p>日落时间：{item.sunset}</p>
              <p>月出时间：{item.moonrise}</p>
              <p>月落时间：{item.moonset}</p>
              <span>月相：{item.moonPhase}</span>
              <i className={`qi-${item.moonPhaseIcon}`}></i>
              <p>
                温度：{item.tempMin}°C~{item.tempMax}°C
              </p>
              <span>白天天气：{item.textDay}</span>
              <i className={`qi-${item.iconDay}`}></i>
              <span>夜晚天气：{item.textNight}</span>
              <i className={`qi-${item.iconNight}`}></i>
              <p>风向（角度）：{item.wind360Day}°</p>
              <p>风向：{item.windDirDay}</p>
              <p>风力等级：{item.windScaleDay}</p>
              <p>风速：{item.windSpeedDay}km/h</p>
              <p>相对湿度：{item.humidity}%</p>
              <p>降水量：{item.precip}mm</p>
              <p>紫外线强度：{item.uvIndex}</p>
              <p>云量：{item.cloud}%</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DayCard;

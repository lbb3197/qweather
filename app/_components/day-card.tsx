// import { useWeatherStore } from "@/store/store";
import "qweather-icons/font/qweather-icons.css";

export function DayCard() {
  // const { weatherDay } = useWeatherStore();

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = weekdays[date.getDay()];
    return { month, day, weekday };
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">未来三日天气</h2>

      {/* {!weatherDay && (
        <div className="text-center py-10 text-gray-500">
          <p>请先查询当前天气以获取预报数据</p>
        </div>
      )} */}

      <div className="space-y-6">
        {/* {weatherDay &&
          weatherDay.daily.map((item) => {
            const { month, day, weekday } = formatDate(item.fxDate);
            return (
              <div
                key={item.fxDate}
                className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">
                      {month}月{day}日
                    </span>
                    <span className="text-gray-500">{weekday}</span>
                  </div>
                  <div className="text-lg font-medium">
                    {item.tempMin}°C ~ {item.tempMax}°C
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <i
                        className={`qi-${item.iconDay} text-3xl text-blue-500`}
                      ></i>
                      <span className="font-medium">白天: {item.textDay}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-xs text-gray-500">风向</div>
                        <div>{item.windDirDay}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">风力</div>
                        <div>{item.windScaleDay}级</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">风速</div>
                        <div>{item.windSpeedDay} km/h</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">风向角度</div>
                        <div>{item.wind360Day}°</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <i
                        className={`qi-${item.iconNight} text-3xl text-indigo-500`}
                      ></i>
                      <span className="font-medium">
                        夜间: {item.textNight}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-xs text-gray-500">相对湿度</div>
                        <div>{item.humidity}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">降水量</div>
                        <div>{item.precip} mm</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">紫外线强度</div>
                        <div>{item.uvIndex}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">云量</div>
                        <div>{item.cloud}%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">日出</div>
                    <div className="font-medium">{item.sunrise}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">日落</div>
                    <div className="font-medium">{item.sunset}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">月出</div>
                    <div className="font-medium">{item.moonrise}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">月落</div>
                    <div className="font-medium">{item.moonset}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 gap-2">
                  <i
                    className={`qi-${item.moonPhaseIcon} text-2xl text-indigo-600`}
                  ></i>
                  <span className="text-gray-700">{item.moonPhase}</span>
                </div>
              </div>
            );
          })} */}
      </div>
    </div>
  );
}

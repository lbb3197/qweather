import "qweather-icons/font/qweather-icons.css";

export function HoursCard() {
  // 格式化时间
  const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  //<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 min-w-[800px]">3行8条

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {/* {location ? `${location} 24小时天气预报` : "24小时天气预报"} */}
        </h2>
        {/* 
        {loadingCurrentWeather && <Loading />}

        {!hourlyWeather && !loadingCurrentWeather && (
          <div className="text-center py-10 text-gray-500">
            <i className="qi-101 text-5xl mb-3 text-blue-300"></i>
            <p>请先在首页查询城市天气以获取小时预报</p>
          </div>
        )}

        {hourlyWeather && (
          <div className="overflow-x-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-w-[800px]">
              {hourlyWeather.hourly.map((item) => (
                <div
                  key={item.fxTime}
                  className="bg-blue-50 rounded-lg p-4 text-center flex flex-col items-center"
                >
                  <div className="text-gray-600 mb-2">
                    {formatTime(item.fxTime)}
                  </div>
                  <i
                    className={`qi-${item.icon} text-4xl text-blue-500 my-2`}
                  ></i>
                  <div className="text-xl font-medium my-1">{item.temp}°C</div>
                  <div className="text-sm text-gray-700 mb-2">{item.text}</div>

                  <div className="text-xs mt-2 grid grid-cols-1 gap-1 w-full">
                    <div className="flex justify-between">
                      <span className="text-gray-500">风向:</span>
                      <span>{item.windDir}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">风力:</span>
                      <span>{item.windScale}级</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">降水:</span>
                      <span>{item.precip}mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">降水率:</span>
                      <span>{item.pop}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">湿度:</span>
                      <span>{item.humidity}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

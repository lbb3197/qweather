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
    if (!city.trim()) return;
    await fetchWeatherNow(city);
    setCity(""); // 清空输入框
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleFetchWeather();
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="relative flex-grow w-full">
            <input
              type="text"
              placeholder="请输入城市名称"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              onClick={handleFetchWeather}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {loadingCurrentWeather && <Loading />}
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
        )}

        {weatherNow && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {location} 实时天气
              </h2>
              <span className="text-gray-500 text-sm">
                {new Date().toLocaleDateString("zh-CN", {
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <div className="flex items-center gap-4">
                <i
                  className={`qi-${weatherNow.now.icon} text-7xl text-blue-500`}
                ></i>
                <div className="text-5xl font-bold">
                  {weatherNow.now.temp}°C
                </div>
              </div>
              <div className="flex-grow">
                <div className="text-xl font-medium mb-2">
                  {weatherNow.now.text}
                </div>
                <div className="text-gray-600">
                  体感温度: {weatherNow.now.feelsLike}°C
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">风速</div>
                <div className="font-medium">
                  {weatherNow.now.windSpeed} km/h
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">风向</div>
                <div className="font-medium">{weatherNow.now.windDir}</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">风力</div>
                <div className="font-medium">{weatherNow.now.windScale}级</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">湿度</div>
                <div className="font-medium">{weatherNow.now.humidity}%</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">降水量</div>
                <div className="font-medium">{weatherNow.now.precip} mm</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">气压</div>
                <div className="font-medium">{weatherNow.now.pressure} hPa</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">能见度</div>
                <div className="font-medium">{weatherNow.now.vis} km</div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">云量</div>
                <div className="font-medium">{weatherNow.now.cloud}%</div>
              </div>
            </div>
          </>
        )}

        {!weatherNow && !loadingCurrentWeather && !error && (
          <div className="text-center py-10 text-gray-500">
            <i className="qi-101 text-5xl mb-3 text-blue-300"></i>
            <p>输入城市名称查询天气</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NowCard;

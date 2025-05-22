import "qweather-icons/font/qweather-icons.css";

function DefaultCard({ text = "输入城市名称查询天气" }: { text?: string }) {
  return (
    <div className="bg-white rounded-lg text-center py-10 text-gray-500 flex flex-col gap-y-2">
      <i className="qi-101 text-5xl text-blue-300"></i>
      <p>{text}</p>
    </div>
  );
}

export async function NowCard({ query }: { query: string }) {
  const res = await fetch(
    `https://qj2tumvqwk.re.qweatherapi.com/geo/v2/city/lookup?location=${query}&key=448400edf6f64044b923a4c1bc79c042`
  );
  const data = await res.json();

  if (data.error) {
    return <DefaultCard text={data.error.detail} />;
  }

  const id = data.location[0]?.id;

  const response = await fetch(
    `https://qj2tumvqwk.re.qweatherapi.com/v7/weather/now?location=${id}&key=448400edf6f64044b923a4c1bc79c042`
  );

  const weather = await response.json();

  if (!weather) {
    return <DefaultCard />;
  }

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col gap-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{query} 实时天气</h2>
        <span className="text-gray-500 text-sm">
          {new Date().toLocaleDateString("zh-CN", {
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex items-center gap-4">
          <i className={`qi-${weather.now.icon} text-7xl text-blue-500`}></i>
          <div className="text-5xl font-bold">{weather.now.temp}°C</div>
        </div>
        <div className="flex-grow">
          <div className="text-xl font-medium mb-2">{weather.now.text}</div>
          <div className="text-gray-600">
            体感温度: {weather.now.feelsLike}°C
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">风速</div>
          <div className="font-medium">{weather.now.windSpeed} km/h</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">风向</div>
          <div className="font-medium">{weather.now.windDir}</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">风力</div>
          <div className="font-medium">{weather.now.windScale}级</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">湿度</div>
          <div className="font-medium">{weather.now.humidity}%</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">降水量</div>
          <div className="font-medium">{weather.now.precip} mm</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">气压</div>
          <div className="font-medium">{weather.now.pressure} hPa</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">能见度</div>
          <div className="font-medium">{weather.now.vis} km</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">云量</div>
          <div className="font-medium">{weather.now.cloud}%</div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
  //       <div className="flex flex-col sm:flex-row items-center gap-4 mb-6"></div>

  //       {loadingCurrentWeather && <Loading />}
  //       {error && (
  //         <div className="p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
  //       )}

  //       {weatherNow && (
  //         <>
  //           <div className="flex items-center justify-between mb-6">
  //             <h2 className="text-2xl font-bold text-gray-800">
  //               {location} 实时天气
  //             </h2>
  //             <span className="text-gray-500 text-sm">
  //               {new Date().toLocaleDateString("zh-CN", {
  //                 month: "long",
  //                 day: "numeric",
  //                 hour: "2-digit",
  //                 minute: "2-digit",
  //               })}
  //             </span>
  //           </div>

  //           <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
  //             <div className="flex items-center gap-4">
  //               <i
  //                 className={`qi-${weatherNow.now.icon} text-7xl text-blue-500`}
  //               ></i>
  //               <div className="text-5xl font-bold">
  //                 {weatherNow.now.temp}°C
  //               </div>
  //             </div>
  //             <div className="flex-grow">
  //               <div className="text-xl font-medium mb-2">
  //                 {weatherNow.now.text}
  //               </div>
  //               <div className="text-gray-600">
  //                 体感温度: {weatherNow.now.feelsLike}°C
  //               </div>
  //             </div>
  //           </div>

  //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">风速</div>
  //               <div className="font-medium">
  //                 {weatherNow.now.windSpeed} km/h
  //               </div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">风向</div>
  //               <div className="font-medium">{weatherNow.now.windDir}</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">风力</div>
  //               <div className="font-medium">{weatherNow.now.windScale}级</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">湿度</div>
  //               <div className="font-medium">{weatherNow.now.humidity}%</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">降水量</div>
  //               <div className="font-medium">{weatherNow.now.precip} mm</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">气压</div>
  //               <div className="font-medium">{weatherNow.now.pressure} hPa</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">能见度</div>
  //               <div className="font-medium">{weatherNow.now.vis} km</div>
  //             </div>
  //             <div className="bg-blue-50 p-3 rounded-lg">
  //               <div className="text-xs text-gray-500 mb-1">云量</div>
  //               <div className="font-medium">{weatherNow.now.cloud}%</div>
  //             </div>
  //           </div>
  //         </>
  //       )}

  //       {!weatherNow && !loadingCurrentWeather && !error && (
  //         <div className="text-center py-10 text-gray-500">
  //           <i className="qi-101 text-5xl mb-3 text-blue-300"></i>
  //           <p>输入城市名称查询天气</p>
  //         </div>
  //       )}
  //     </div> */}
  //   </div>
  // );
}

import { useWeatherStore } from "../../store/store";
import "qweather-icons/font/qweather-icons.css";
import Loading from "../loading";

const SuggestionCard = () => {
  const { suggestion, loadingCurrentWeather, location } = useWeatherStore();

  // 获取合适的指数背景颜色
  const getIndexColor = (type: number) => {
    const colorMap: Record<string, string> = {
      // 运动指数
      "1": "bg-green-50",
      // 洗车指数
      "2": "bg-blue-50",
      // 穿衣指数
      "3": "bg-purple-50",
      // 钓鱼指数
      "4": "bg-cyan-50",
      // 紫外线指数
      "5": "bg-yellow-50",
      // 旅游指数
      "6": "bg-indigo-50",
      // 过敏指数
      "7": "bg-red-50",
      // 舒适度指数
      "8": "bg-amber-50",
      // 感冒指数
      "9": "bg-teal-50",
      // 空气污染扩散指数
      "10": "bg-lime-50",
      //空调开启指数
      "11": "bg-green-50",
      // 太阳镜指数
      "12": "bg-orange-50",
      // 化妆指数
      "13": "bg-purple-50",
      // 晾晒指数
      "14": "bg-blue-50",
      // 交通指数
      "15": "bg-red-50",
      // 防晒指数
      "16": "bg-yellow-50",
      // 其他
      default: "bg-gray-50",
    };

    return colorMap[type.toString()] || colorMap.default;
  };

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {location ? `${location} 生活指数` : "生活指数"}
        </h2>

        {loadingCurrentWeather && <Loading />}

        {!suggestion && !loadingCurrentWeather && (
          <div className="text-center py-10 text-gray-500">
            <i className="qi-101 text-5xl mb-3 text-blue-300"></i>
            <p>请先在首页查询城市天气以获取生活指数</p>
          </div>
        )}

        {suggestion && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestion.daily.map((item) => (
              <div
                key={item.name}
                className={`${getIndexColor(
                  item.type
                )} rounded-lg p-4 shadow-sm`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <div className="font-medium text-lg">{item.name}</div>
                    <div className="inline-block px-2 py-1 bg-white rounded text-sm font-medium text-blue-700 mt-1">
                      {item.category}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuggestionCard;

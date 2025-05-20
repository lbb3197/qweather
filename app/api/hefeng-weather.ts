import axios from "axios";

// 和风天气API密钥（实际使用时请替换为你自己的密钥）
const API_KEY = "448400edf6f64044b923a4c1bc79c042";

// 获取城市经纬度/城市名称/城市ID/
export const fetchLocation = async (city: string) => {
  try {
    const response = await axios.get(
      "https://qj2tumvqwk.re.qweatherapi.com/geo/v2/city/lookup",
      {
        params: {
          location: city,
          key: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};
// 获取实时天气数据
export const fetchCurrentWeatherhefeng = async (location: number) => {
  try {
    const response = await axios.get(
      "https://qj2tumvqwk.re.qweatherapi.com/v7/weather/now",
      {
        params: {
          location: location,
          key: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

//获取今日天气
export const fetchWeatherDay = async (location: number) => {
  try {
    const response = await axios.get(
      "https://qj2tumvqwk.re.qweatherapi.com/v7/weather/3d",
      {
        params: {
          location: location,
          key: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    throw error;
  }
};

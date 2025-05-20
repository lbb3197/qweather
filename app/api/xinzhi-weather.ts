// import axios from "axios";

// // 心知天气API密钥（实际使用时请替换为你自己的密钥）
// const API_KEY = "SuG0txLL5mn07RiE2";

// // 获取当前天气数据
// export const fetchCurrentWeather = async (location: string) => {
//   try {
//     const response = await axios.get(
//       "https://api.seniverse.com/v3/weather/now.json",
//       {
//         params: {
//           key: API_KEY,
//           location,
//           language: "zh-Hans",
//           unit: "c",
//         },
//       }
//     );

//     return response.data.results[0];
//   } catch (error) {
//     console.error("Error fetching current weather:", error);
//     throw error;
//   }
// };

// // 获取未来天气预报
// export const fetchWeatherForecast = async (location: string, days = 3) => {
//   try {
//     const response = await axios.get(
//       "https://api.seniverse.com/v3/weather/daily.json",
//       {
//         params: {
//           key: API_KEY,
//           location,
//           language: "zh-Hans",
//           unit: "c",
//           start: 0,
//           days,
//         },
//       }
//     );

//     return response.data.results[0];
//   } catch (error) {
//     console.error("Error fetching weather forecast:", error);
//     throw error;
//   }
// };

// export const fetchSuggestion = async (location: string, days = 1) => {
//   try {
//     const response = await axios.get(
//       "https://api.seniverse.com/v3/life/suggestion.json",
//       {
//         params: {
//           key: API_KEY,
//           location,
//           language: "zh-Hans",
//           unit: "c",
//           start: 0,
//           days,
//         },
//       }
//     );

//     return response.data.results[0];
//   } catch (error) {
//     console.error("Error fetching weather forecast:", error);
//     throw error;
//   }
// };

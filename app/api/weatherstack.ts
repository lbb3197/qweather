// import axios from "axios";

// // 心知天气API密钥（实际使用时请替换为你自己的密钥）
// const API_KEY = "5713e7bd80951aa4e34013d9f1b43b14";

// // 获取当前天气数据
// export const fetchCurrentWeatherstack = async (location: string) => {
//   try {
//     const response = await axios.get("http://api.weatherstack.com/current", {
//       params: {
//         access_key: API_KEY,
//         query: location,
//         // language: "zh",
//         units: "m",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching current weather:", error);
//     throw error;
//   }
// };

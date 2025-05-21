import { useWeatherStore } from "../../store/store";

const SuggestionCard = () => {
  const { suggestion } = useWeatherStore();

  return (
    <div>
      <h1>天气指数</h1>
      <div>
        {suggestion?.daily.map((item) => (
          <div key={item.name}>
            <div>
              <p>
                {item.name}:{item.category}
              </p>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionCard;

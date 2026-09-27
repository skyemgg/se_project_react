import sunny from "../../assets/sunnyDay.png";
import "./WeatherCard.css";

function WeatherCard({ WeatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {WeatherData.temp.F} &deg; </p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  );
}
export default WeatherCard;

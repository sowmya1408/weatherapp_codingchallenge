import React from "react";
import "./Details.css";

interface DetailsProps {
  weatherInfo: any;
}

const Details = ({ weatherInfo }: DetailsProps) => {
  const rawTimeStamp = weatherInfo?.sys?.sunrise;
  const dateinmillisec = new Date(rawTimeStamp * 1000);
  const sunriseTime = new Date(dateinmillisec).toLocaleTimeString();
  const sunsetTimeStamp = weatherInfo?.sys?.sunset;
  const sunsetinmilli = new Date(sunsetTimeStamp * 1000);
  const sunsetTime = new Date(sunsetinmilli).toLocaleTimeString();

  return (
    <main className="InfoContainer">
      <img
        src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@4x.png`}
        alt="weather-icon"
      />
      <section>
        <ul>
          <li>{weatherInfo?.weather[0]?.main}</li>
          <li className="tempSize">{`${(weatherInfo?.main?.temp - 273).toFixed(
            0
          )}°C`}</li>
          <li>
            H : {`${(weatherInfo?.main?.temp_max - 273).toFixed(0)}°C`}
            <span className="temp">
              L : {`${(weatherInfo?.main?.temp_min - 273).toFixed(0)}°C`}
            </span>
          </li>
        </ul>
      </section>
      <section>
        <div className="InfoContainer">
          <ul>
            <li>Sunrise</li>
            <li>{sunriseTime.substring(0, 5)}</li>
          </ul>
          <ul>
            <li>Sunset</li>
            <li>{sunsetTime.substring(0, 5)}</li>
          </ul>
        </div>
        <div className="InfoContainer">
          <ul>
            <li>Humidity</li>
            <li>{`${weatherInfo?.main?.humidity}%`}</li>
          </ul>
          <ul>
            <li>Visibility</li>
            <li>{`${weatherInfo?.visibility}m`}</li>
          </ul>
        </div>
        <div className="InfoContainer">
          <ul>
            <li>Wind</li>
            <li>{`${weatherInfo?.wind?.speed}m/s`}</li>
          </ul>
          <ul>
            <li>Pressure</li>
            <li>{`${weatherInfo?.main?.pressure}hPa`}</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Details;

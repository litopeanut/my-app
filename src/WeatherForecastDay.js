import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecastDay">{props.data.dt}</div>
      <WeatherIcon code={forecast[0].weather[0].icon} size={34} />{" "}
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(forecast[0].temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(forecast[0].temp.min)}°
        </span>
      </div>
    </div>
  );
}

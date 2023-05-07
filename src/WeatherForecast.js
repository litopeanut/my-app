import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-1">
          <div className="WeatherForecastDay">Thu</div>
          <WeatherIcon code="01d" size={34} />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { currentLocation } from "./context/currentLocationContext";
import Dashboard from "./pages/Dashboard";
import WeatherDetails from "./pages/WeatherDetails";
import {
  getWeatherByCurrentLocation,
  getWeatherByCityName,
} from "./services/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [defaultCityName1] = useState("Berlin");
  const [defaultCityName2] = useState("London");

  console.log(lat);
  console.log(lon);
  const [
    weatherDataForCurrentLocation,
    setWeatherDataForCurrentLocation,
  ] = useState(null);
  const [weatherDataForBerlin, setweatherDataForBerlin] = useState(null);
  const [weatherDataForLondon, setweatherDataForLondon] = useState(null);

  const [infoError, setInfoError] = useState("");

  const getWeatherForCurrentLocation = useCallback(async () => {
    try {
      navigator.geolocation.getCurrentPosition(function (position) {
        if (position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }
      });

      const weatherDataByCurrentLocation = await getWeatherByCurrentLocation(
        lat,
        lon
      );
      setWeatherDataForCurrentLocation(weatherDataByCurrentLocation);
    } catch (err) {
      setInfoError("Please turn on your location");
    }
  }, [lat, lon]);
  useEffect(() => {
    getWeatherForCurrentLocation();
  }, [lon]);

  const getWeatherForCities = useCallback(async () => {
    try {
      const weatherDataByBerlin = await getWeatherByCityName(defaultCityName1);
      setweatherDataForBerlin(weatherDataByBerlin);
      const weatherDataByLondon = await getWeatherByCityName(defaultCityName2);

      setweatherDataForLondon(weatherDataByLondon);
    } catch (err) {
      setInfoError("Please turn on your location");
    }
  }, [defaultCityName1, defaultCityName2]);
  useEffect(() => {
    getWeatherForCities();
  }, []);
  return (
    <currentLocation.Provider
      value={{
        weatherDataForCurrentLocation,
        weatherDataForBerlin,
        weatherDataForLondon,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="weatherDetails/:location" element={<WeatherDetails />} />
        </Routes>
      </Router>
    </currentLocation.Provider>
  );
}

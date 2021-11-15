import React, { useContext } from "react";
import LocationButton from "../component/LocationButton";
import PageHeading from "../component/PageHeading";
import { currentLocation } from "../context/currentLocationContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const {
    weatherDataForCurrentLocation,
    weatherDataForBerlin,
    weatherDataForLondon,
  } = useContext(currentLocation);
  const navigate = useNavigate();
  const handleCurrentLocationClick = () => {
    navigate(`/weatherDetails/${weatherDataForCurrentLocation?.name}`);
  };

  const handleLocationBerlin = () => {
    navigate(`/weatherDetails/${weatherDataForBerlin?.name}`);
  };

  const handleLocationLondon = () => {
    navigate(`/weatherDetails/${weatherDataForLondon?.name}`);
  };
  console.log(weatherDataForCurrentLocation);

  return (
    <main className="container">
      <PageHeading headingText="Dashboard" />

      <section className="btn-container">
        <LocationButton
          text={weatherDataForCurrentLocation?.name}
          temperature={(
            weatherDataForCurrentLocation?.main?.temp - 273
          ).toFixed(0)}
          handleClick={handleCurrentLocationClick}
        />
        <LocationButton
          text={weatherDataForBerlin?.name}
          temperature={(weatherDataForBerlin?.main?.temp - 273).toFixed(0)}
          handleClick={handleLocationBerlin}
        />
        <LocationButton
          text={weatherDataForLondon?.name}
          temperature={(weatherDataForLondon?.main?.temp - 273).toFixed(0)}
          handleClick={handleLocationLondon}
        />
      </section>
    </main>
  );
};

export default Dashboard;

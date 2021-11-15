import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { currentLocation } from "../context/currentLocationContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Details from "../component/Details";
import PageHeading from "../component/PageHeading";

const WeatherDetail = () => {
  const { location } = useParams();
  console.log(location);
  let history = useNavigate();

  const {
    weatherDataForCurrentLocation,
    weatherDataForBerlin,
    weatherDataForLondon,
  } = useContext(currentLocation);
  const handleClick = () => {
    history("/");
  };
  return (
    <div>
      <button className="backButton" type="button" onClick={handleClick}>
        <ArrowBackIcon />
      </button>
      <PageHeading headingText={location ? location : ""} />
      {location === "Berlin" ? (
        <Details weatherInfo={weatherDataForBerlin} />
      ) : location === "London" ? (
        <Details weatherInfo={weatherDataForLondon} />
      ) : (
        <Details weatherInfo={weatherDataForCurrentLocation} />
      )}
    </div>
  );
};

export default WeatherDetail;

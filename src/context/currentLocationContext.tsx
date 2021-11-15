import React from "react";

export const currentLocation = React.createContext<any>({
  weatherDataForCurrentLocation: null,
  setWeatherDataForCurrentLocation: (data: null) => data,
  weatherDataForBerlin: null,
  setweatherDataForBerlin: (data: null) => data,
  weatherDataForLondon: {},
  setweatherDataForLondon: (data: null) => data,
});

const token = "e905e31d0f351236265a912ae9977a0b";
const url = "https://api.openweathermap.org/data/2.5/weather";

const responseConf = async (response) => {
  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }
  const weather = await response.json();
  return weather;
};

export const getWeatherByCityName = async (city) => {
  if (!city) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(`${url}?q=${city}&appid=${token}`);

  return responseConf(response);
};

export const getWeatherByCurrentLocation = async (lat, lon) => {
  console.log("lat", lat);
  if (!lat && !lon) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${token}`);
  return responseConf(response);
};

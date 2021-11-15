const token = "bda3f1a71e4bfdedb79be12107b87246";
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
  if (!lat && !lon) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${token}`);
  return responseConf(response);
};

// Functions
async function getWeather(path) {
  const res = await fetch(path)
  const json = await res.json()
  console.log("getWeatherByGeo--->", res)
  console.log("getWeatherByGeo.main--->", res.main)
  return json
}
export function getWeatherByGeo(apikey, lat, lon) {
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
  return getWeather(path)
}

export function getWeatherByZip(apiKey, zip, units) {
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  return getWeather(path)
}

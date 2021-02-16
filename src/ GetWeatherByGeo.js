export default async function getWeatherByGeo(apikey, lat, lon) {

  const apiKey = apikey
  const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
  const res = await fetch(path)
  const json = await res.json()

  console.log("getWeatherByGeo--->", res)
  console.log("getWeatherByGeo.main--->", res.main)
    
  return json
}
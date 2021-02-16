// Functions
export default async function getWeather(apikey, zip, unit) {

  const apiKey = apikey
  //
  const units = unit
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  const res = await fetch(path)
  const json = await res.json()

  console.log("getWeather--->", res)
  console.log("getWeather.main--->", res.main)
    
  return json
}

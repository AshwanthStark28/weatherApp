import { useState } from "react"
import axios from "axios"

function App(){

    const [deg,setdeg] = useState("0")
    const [city,setcity] = useState("France")
    const [desc,setdesc] = useState("Rainy")
    const [evalue,setevalue] = useState("")

    function handleChange(event){
        setevalue(event.target.value)
    }


    function getWeather(){
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=f38a9c8d6b7617bedf40726f698ef4b2`)

        weatherdata.then(function(info){
            setdeg(info.data.main.temp)
            setcity(info.data.name)
            setdesc(info.data.weather[0].main)

        })
    }


    return(
      <div className="flex flex-row justify-center h-[100vh] items-center">
        <div style={{"backgroundImage": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%"}} className="p-2 rounded-md shadow">

            <h2 className="font-medium">Hey!🌥️</h2>
            <p className="text-xs">Do you want to know the Weather Report :)</p>
            <input onChange={handleChange} className="rounded-md h-6 text-sm p-1 mt-2 outline-none" placeholder="City Name"></input>
            <br></br>
            <button onClick={getWeather} className="bg-black text-white rounded-md p-1 mt-2 text-xs">Get Report⚡</button>

            <p className="text-xs mt-2">Degree:{deg} | City:{city} | Weather:{desc}</p>
        </div>
      </div>
    )
}

export default App
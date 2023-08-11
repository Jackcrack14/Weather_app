import {  useState } from "react";
import "./App.css";


export default function App() {
  const [search,setSearch] = useState("");
  const [data,setData] = useState({"location":"","current":{"condition":""}});
  const fetchData =  (evt) => { if(evt.key ==="Enter"){
                                fetch(`https://api.weatherapi.com/v1/current.json?key=846180d0b22e4633ab765247232107&q=${search}&aqi=yes`)
                                .then(res => res.json())
                                .then(result => {
                                setData(result);
                                setSearch("");
                                console.log(result)
                              })}

                              }
  
  return (
    <div className="App">
      <main>
      <div className="search-box">
        <input type="text" placeholder="Search..." className="search-bar" onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={fetchData}/>
      </div>
      <div className="location-box" >
        <div className="location">{data.location.name}</div>
        <div className="date">{new Date().toISOString().split('T')[0]}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{data.current.temp_c}&deg;C</div>
        <div className="weather">{data.current.condition.text}</div>
      </div>
      </main>
    </div>
  )
}



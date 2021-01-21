import React, {useState} from 'react'
import SelectLocation from "./SelectLocation"
import WeatherPanel from "./WeatherPanel"
const App = () => {
	let [city, setCity] = useState('');
	
	return (
		<div>
			<h1 className="align-middle">Weather in: {city}</h1>
			<SelectLocation onSelect={setCity}/>
			<WeatherPanel city={city}/>
		</div>
	)
}

export default App

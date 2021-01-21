import React,{useState, useEffect} from "react";
import PropTypes from "prop-types";
import format from 'date-fns/format'
import { groupBy } from "lodash";
import Day from './Day';

const WeatherPanel = ({city})=>{
    const [data, setData] = useState([])
    const [error, setError] = useState('');
    useEffect(()=>{
        if(!city) return null;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`).then(res =>
                res.json()
            )
            .then(data => {
                if(data?.cod !=='200'){
                    setError(data?.message);
                    return;
                }
                const groupedByDay = groupBy(data?.list, (item) => {
                    return format(new Date(item?.dt_txt), 'yyy-MM-dd');
                })
                console.log(groupedByDay,groupedByDay[format(new Date(), 'yyy-MM-dd')][0].main.temp);
                setData(groupedByDay);
            }).catch(err=>{
                setError(error?.message)
        		console.log("City not found",err);
        	})

    },[city]);
    let tempNow = ()=>{
        if(data && data[format(new Date(), 'yyy-MM-dd')])
        return data[format(new Date(), 'yyy-MM-dd')][0].main.temp + "";
        return "";
    }

    if(city)
    return (
		<div className="weatherPanel">
            <h3 className="align-middle">
                Weather now: {tempNow()} °C
            </h3>
			{error && <div className="error align-middle">Error: {error}</div>}
			<div className="row align-middle">
            {Object.entries(data).map(([day, list]) => {
				return <Day key={day} day={day} list={list} />
			})}

            </div>
		</div>
	)
    return <div className="align-middle">Select city</div>
}

WeatherPanel.propTypes = {
    city: PropTypes.string
}

export default WeatherPanel;
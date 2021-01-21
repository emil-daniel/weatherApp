import React,{useState} from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	let averageTemp = ()=>{
		let max= {main:{temp:Number.MIN_SAFE_INTEGER}};
		let min= {main:{temp:Number.MAX_SAFE_INTEGER}};
		console.log(list );
		list.forEach(el => {
			console.log(el.weather[0].description, el.main.temp);
			if(el.main.temp>max.main.temp)
				max = el;
			if(el.main.temp<min.main.temp)
				min = el;
		});
		
		return Math.round(max.main.temp) + " / " + Math.round(min.main.temp) + "°C" + "     " + max.weather[0].description; 
	}
	let getSrc=()=>{
		let max= {main:{temp:Number.MIN_SAFE_INTEGER}};
		
		list.forEach(el => {
			if(el.main.temp>max.main.temp)
				max = el;
			
		});
		
		return `http://openweathermap.org/img/wn/${max.weather[0].icon}@2x.png`; 
	}
	return (
		<div className="column">
			<h4>
			{format(new Date(day), 'eeee, dd LLLL')}
			
			</h4>
			{/* {list.map((item) => {
				return <div key={item?.dt}>{item?.dt_txt}</div>
			})} */}
			

			{averageTemp()}
			<br/>

			<img className="icon" src={getSrc()}/>
			
			{/* {image} */}
			
		</div>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day
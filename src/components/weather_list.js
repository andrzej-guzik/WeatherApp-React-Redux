import React from "react";
import { connect } from "react-redux";

import Weather from "./weather";
import GoogleMap from "./google_map";

const WeatherList = props => {
	const renderWeaher = (data) => {	
		const tempsArr = data.list.map(temps => temps.main.temp);	
		const pressureArr = data.list.map(pressures => pressures.main.pressure);	
		const humidityArr = data.list.map(humidities => humidities.main.humidity);
		const { id } = data.city;
		const { lon, lat } = data.city.coord;

		return (
			<li className="weather-list__item" key={id}>
				<GoogleMap lon={lon} lat={lat} />
				<div className="weather-charts">						
					<Weather cityData={tempsArr} label="Temperature" units="C" color="orange" />
					<Weather cityData={pressureArr} label="Pressure" units="hpa" color="green" />
					<Weather cityData={humidityArr} label="Humidity" units="%" color="blue" />
				</div>
			</li>		
		);
	};

	return (
		<ul className="weather-list">
			{props.weather.map(item => renderWeaher(item))}
		</ul>
	);
};

const mapStateToProps = ({ weather }) => {
	return { weather };
};

export default connect(mapStateToProps)(WeatherList);
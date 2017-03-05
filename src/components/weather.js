import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const average = (data) => {
	if (data.length !== 0) {
		const sum = data.reduce((prev, item) => {
			return prev + item;
		}, 0); 	
	
		return Math.floor(sum/data.length);
	}
};


const Weather = props => {
	const { cityData, label, units, color } = props;
	return (
		<div className="sparkline-chart">
			<h3>{label} [{units}]</h3>
			<Sparklines data={cityData} height="150" >
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<p>Average: {average(cityData)} {units}</p>
		</div>
	);
};

export default Weather;
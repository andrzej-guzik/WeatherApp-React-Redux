import React from "react";

import SearchBar from "./search_bar";
import WeatherList from "./weather_list";

const App = props => {
	return (
		<div className="site-wrapper">
			<h1>Weather App</h1>
			<p>5 day / 3 hour forecast data</p>
			<SearchBar />
			<WeatherList />
		</div>
	);
};

export default App;
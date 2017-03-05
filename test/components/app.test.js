import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";
import SearchBar from "../../src/components/search_bar";
import WeatherList from "../../src/components/weather_list";

describe("App", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it("show the correct text ", () => {
		expect(component).to.contain("Weather App");
	});

	it("show the SearchBar component", () => {
		expect(component.find(".search-bar")).to.exist;
	});

	it("show the WeatherList component", () => {
		expect(component.find(".weather-list")).to.exist;
	});	
});
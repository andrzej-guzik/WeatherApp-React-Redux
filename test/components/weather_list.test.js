import { renderComponent, expect } from "../test_helper";
import WeatherList from "../../src/components/weather_list";

describe("WeatherList Component", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(WeatherList);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("weather-list");
	});
});
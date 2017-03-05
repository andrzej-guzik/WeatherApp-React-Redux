import { expect } from "../test_helper";
import { FETCH_WEATHER } from "../../src/actions/types";
import { WeatherReducer } from "../../src/reducers/weather";
import { fetchWeather } from "../../src/actions";

describe("WeatherReducer", () => {
	it("handles action with unknown type", () => {
		expect(WeatherReducer(undefined, {})).to.eql([]);
	});

});
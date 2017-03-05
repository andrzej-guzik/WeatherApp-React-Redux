import { expect } from "../test_helper";
import { FETCH_WEATHER } from "../../src/actions/types";
import { fetchWeather } from "../../src/actions";



describe("Actions", () => {
	let action;
	
	describe("fetchWeather", () => {
		beforeEach(() => {
			action = fetchWeather("Warszawa");
		});

		it("has a correct type", () => {
			expect(action.type).to.equal(FETCH_WEATHER);
		});

		it("has a correct response status", () => {
			return expect(action.payload).to.eventually.have.property("status", 200);
		});
	});
});
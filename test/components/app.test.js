import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";
import SearchBar from "../../src/components/search_bar";

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
});
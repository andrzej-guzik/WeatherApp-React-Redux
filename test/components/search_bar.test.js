import { renderComponent, expect } from "../test_helper";
import SearchBar from "../../src/components/search_bar";

describe("SearchBar", () => {
	let component;

	beforeEach(() => {
		component = renderComponent(SearchBar);
	});

	it("has a correct class", () => {
		expect(component).to.have.class("search-bar");
	});

	describe("entering text", () => {
		beforeEach(() => {
			component.find("input").simulate("change", "text");
		});

		it("show the text in the input field", () => {
			expect(component.find("input")).to.have.value("text");
		});

		it("clear the input when submitted", () => {
			component.simulate("submit");
			expect(component.find("input")).to.have.value("");
		});
	});
});
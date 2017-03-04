import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchText: "" };
	}

	handleChange(event) {
		this.setState({
			searchText: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState({
			searchText: ""
		});
	}

	render() {
		return (
            <form className="search-bar" onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Enter a city name <br />
					<input value={this.state.searchText} onChange={this.handleChange.bind(this)} />
				</label>
				<button className="btn">Submit</button>
            </form>
		);
	}
}

export default SearchBar;
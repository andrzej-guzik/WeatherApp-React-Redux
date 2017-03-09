import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../actions";

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

		this.props.fetchWeather(this.state.searchText);
		this.setState({
			searchText: ""
		});
	}

	render() {
		return (
            <form className="search-bar" onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Enter city <br/>
					<input value={this.state.searchText} onChange={this.handleChange.bind(this)} />
				</label>
				<button className="btn">Submit</button>
            </form>
		);
	}
}

export default connect(null, { fetchWeather })(SearchBar);

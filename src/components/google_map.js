import React, { Component } from "react";

class GoogleMap extends Component {
	componentDidMount() {
		const map = new google.maps.Map(this.mapTarget, {
			zoom: 10,
			scrollwheel: false,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});

		const marker = new google.maps.Marker({
			position: {
				lat: this.props.lat,
				lng: this.props.lon
			},
			map: map
		});
		
	}

	render() {
		return <div className="google-map" ref={ div => this.mapTarget = div } />;
	}
}

export default GoogleMap;
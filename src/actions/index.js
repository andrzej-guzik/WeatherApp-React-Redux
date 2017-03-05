import axios from "axios";

import { FETCH_WEATHER } from "./types";
import { API_KEY, ROOT_URL } from "../settings";

export const fetchWeather = city => {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
};
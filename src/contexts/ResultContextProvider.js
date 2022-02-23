import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const getResults = async (url) => {
		setLoading(true);

		const res = await fetch(`${baseUrl}${url}`, {
			method: "GET",
			headers: {
				"x-user-agent": "desktop",
				"x-proxy-location": "EU",
				"x-rapidapi-host": "google-search3.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
			},
		});

		const data = await res.json();

		if (url.includes("/news")) {
			setResults(data.entries);
		} else if (url.includes("/images")) {
			setResults(data.image_results);
		} else {
			setResults(data.results);
		}

		setLoading(false);
	};

	return (
		<ResultContext.Provider
			value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
			{children}
		</ResultContext.Provider>
	);
};

export const useResultContext = () => useContext(ResultContext);

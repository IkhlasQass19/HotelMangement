import React from "react";
import { useSearchParams } from "react-router-dom";

import Select from "./Select";

const SortBy = ({ options }) => {
	// Router-DOM Hooks
	const [searchParams, setSearchParams] = useSearchParams();
	const sortBy = searchParams.get("sortBy") || "";

	// Handler Functions
	const handleChange = (e) => {
		searchParams.set("sortBy", e.target.value);
		setSearchParams(searchParams);
	};

	return (
		<Select
			options={options}
			type="white"
			onChange={handleChange}
			value={sortBy}
		/>
	);
};

export default SortBy;

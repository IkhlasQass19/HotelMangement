import React from "react";

import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import SortBy from "../../components/SortBy";

const CabinTableOperations = () => {
	return (
		<TableOperations>
			<Filter
				filterField="discount"
				options={[
					{ value: "all", label: "All" },
					{ value: "no-discount", label: "No Discount" },
					{ value: "with-discount", label: "With Discount" },
				]}
			/>
			<SortBy
				options={[
					{ value: "name-asc", label: "Sort By Name A-Z" },
					{ value: "name-desc", label: "Sort By Name Z-A" },
					{
						value: "regularPrice-asc",
						label: "Sort By Price(lowest first)",
					},
					{
						value: "regularPrice-desc",
						label: "Sort By Price(highest first)",
					},
					{
						value: "maxCapacity-asc",
						label: "Sort By Capacity(lowest first)",
					},
					{
						value: "maxCapacity-desc",
						label: "Sort By Capacity(highest first)",
					},
				]}
			/>
		</TableOperations>
	);
};

export default CabinTableOperations;

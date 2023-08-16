import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";
import { RESULTS_PER_PAGE } from "../../utils/constants";

export const useBookings = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// Router-DOM Hooks
	const [searchParams] = useSearchParams();

	// Filtering
	const filterValue = searchParams.get("status");
	const filter =
		!filterValue || filterValue === "all"
			? null
			: { field: "status", value: filterValue };

	// Sorting
	const sortByValue = searchParams.get("sortBy") || "startDate-desc";
	const [field, direction] = sortByValue.split("-");
	const sortBy = { field, direction };

	// Pagination
	const page = !searchParams.get("page")
		? 1
		: Number(searchParams.get("page"));

	// React Query Hook to consume query
	const {
		isLoading,
		data: { data: bookings, count } = {},
		error,
	} = useQuery({
		queryKey: ["bookings", filter, sortBy, page],
		queryFn: () => getBookings({ filter, sortBy, page }),
	});

	// Pre-Fetching Next Page
	const pageCount = Math.ceil(count / RESULTS_PER_PAGE);

	if (page < pageCount)
		queryClient.prefetchQuery({
			queryKey: ["bookings", filter, sortBy, page + 1],
			queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
		});
	if (page > 1)
		queryClient.prefetchQuery({
			queryKey: ["bookings", filter, sortBy, page - 1],
			queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
		});

	return { isLoading, error, bookings, count };
};

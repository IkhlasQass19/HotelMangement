import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getBookingsAfterDate } from "../../services/apiBookings";

export const useRecentBookings = () => {
	// Router-DOM hooks
	const [searchParams] = useSearchParams();
	const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
	const queryDate = subDays(new Date(), numDays).toISOString();

	// React Query
	const { data: bookings, isLoading } = useQuery({
		queryKey: ["bookings", `last-${numDays}`],
		queryFn: () => getBookingsAfterDate(queryDate),
	});

	return { bookings, isLoading };
};

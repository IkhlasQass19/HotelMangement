import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { getStaysAfterDate } from "../../services/apiBookings";

export const useRecentStays = () => {
	// Router-DOM hooks
	const [searchParams] = useSearchParams();
	const numDays = !searchParams.get("last") ? 7 : searchParams.get("last");
	const queryDate = subDays(new Date(), numDays).toISOString();

	// React Query
	const { data: stays, isLoading } = useQuery({
		queryKey: ["stays", `last-${numDays}`],
		queryFn: () => getStaysAfterDate(queryDate),
	});

	// Deriving confirmed stays
	const confirmedStays = stays?.filter(
		(stay) => stay.status === "checked-in" || stay.status === "checked-out"
	);

	return { stays, isLoading, confirmedStays, numDays };
};

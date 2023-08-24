import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getBookingbyId } from "../../services/apiBookings";

export const useBooking = () => {
	const { bookingId } = useParams();

	// React Query Hook to consume query
	const {
		data: booking,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["booking", bookingId],
		queryFn: () => getBookingbyId(bookingId),
		retry: false,
	});

	return { booking, isLoading, error };
};

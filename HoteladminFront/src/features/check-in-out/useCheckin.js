import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCheckin = () => {
	// Router-DOM Hooks
	const navigate = useNavigate();

	// React Query Hooks
	const queryClient = useQueryClient();

	// Mutate Query
	const { isLoading: isCheckingin, mutate: checkin } = useMutation({
		mutationFn: ({ bookingId, breakfast }) =>
			updateBooking(bookingId, {
				status: "checked-in",
				isPaid: true,
				...breakfast,
			}),

		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked in.`);
			queryClient.invalidateQueries({ active: true });
			navigate("/");
		},

		onError: () => {
			toast.error(`Booking Check-in Unsuccessful.`);
		},
	});

	return { checkin, isCheckingin };
};

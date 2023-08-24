import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export const useCheckout = () => {
	// React Query Hooks
	const queryClient = useQueryClient();

	// Mutate Query
	const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
		mutationFn: (bookingId) =>
			updateBooking(bookingId, {
				status: "checked-out",
			}),

		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked out.`);
			queryClient.invalidateQueries({ active: true });
		},

		onError: () => {
			toast.error(`Booking Check-out Unsuccessful.`);
		},
	});

	return { checkout, isCheckingOut };
};

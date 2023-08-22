import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteBooking } from "../../services/apiBookings";

export const useDeleteBooking = () => {
	const queryClient = useQueryClient();

	const { mutate: delBooking, isLoading: isDeleting } = useMutation({
		mutationFn: deleteBooking,
		onSuccess: () => {
			toast.success("Booking was deleted successfully");
			queryClient.invalidateQueries({
				queryKey: ["bookings"],
			});
		},
		onError: () => {
			toast.error("Booking couldn't be deleted");
		},
	});

	return { delBooking, isDeleting };
};

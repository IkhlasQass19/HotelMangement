import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { deleteCabinById } from "../../services/apiCabins";

export const useDeleteCabin = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// React Query Mutation of state
	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: deleteCabinById,
		onSuccess: () => {
			// Toaster Msg
			toast.success("Cabin Deleted Successfully!");

			// Invalidate Query stored currently to trigger re-fetch
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteCabin };
};

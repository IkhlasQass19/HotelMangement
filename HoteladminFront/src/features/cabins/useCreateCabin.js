import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createEditCabin } from "../../services/apiCabins";

export const useCreateCabin = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// React Query Mutation of state
	const { mutate: createCabin, isLoading: isCreating } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			// Toaster Msg
			toast.success("Cabin Created Successfully!");

			// Invalidate Query stored currently to trigger re-fetch
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { createCabin, isCreating };
};

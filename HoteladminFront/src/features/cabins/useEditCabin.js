import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { createEditCabin } from "../../services/apiCabins";

export const useEditCabin = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// React Query Mutation of state
	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onSuccess: () => {
			// Toaster Msg
			toast.success("Cabin Edited Successfully!");

			// Invalidate Query stored currently to trigger re-fetch
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { editCabin, isEditing };
};

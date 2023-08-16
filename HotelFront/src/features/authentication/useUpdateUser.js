import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateCurrentUser } from "../../services/apiAuth";

export const useUpdateUser = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// React Query Mutation of state
	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: updateCurrentUser,
		onSuccess: ({ user }) => {
			// Toaster Msg
			toast.success("User account updated successfully!");
			queryClient.setQueryData(["user"], user);

			// Invalidate Query stored currently to trigger re-fetch
			queryClient.invalidateQueries({
				queryKey: ["user"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { updateUser, isUpdating };
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export const useUpdateSetting = () => {
	// React Query Client
	const queryClient = useQueryClient();

	// React Query Mutation of state
	const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			// Toaster Msg
			toast.success("Setting Updated Successfully!");

			// Invalidate Query stored currently to trigger re-fetch
			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { updateSetting, isUpdating };
};

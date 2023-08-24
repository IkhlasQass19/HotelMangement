import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { logout as logoutAPI } from "../../services/apiAuth";

export const useLogout = () => {
	// React Query
	const queryClient = useQueryClient();

	// Router-DOM hooks
	const navigate = useNavigate();

	// React Query
	const { mutate: logout, isLoading } = useMutation({
		mutationFn: logoutAPI,
		onSuccess: () => {
			queryClient.removeQueries();
			toast.success("Logged Out Successfully");
			navigate("/login", { replace: true });
		},
	});

	return { logout, isLoading };
};

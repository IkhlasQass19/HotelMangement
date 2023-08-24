import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export const useSignUp = () => {
	const { mutate: signup, isLoading } = useMutation({
		mutationFn: signupAPI,
		onSuccess: (user) => {
			toast.success(
				`User created successfully! Please verify the account from email recieved`
			);
		},
	});

	return { signup, isLoading };
};

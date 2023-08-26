import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../../services/apiAuth";
export const useUser = () => {
	const { isLoading, data: user } = useQuery({
		queryKey: ["user"],
		queryFn: getCurrentUser,
	});
	const storedUserData = localStorage.getItem("user");
	const parsedUserData = JSON.parse(storedUserData);
	console.log("Stored user data:", parsedUserData);
	const role = parsedUserData?.user.role;
	console.log("Role:", role);
	return { isLoading, isAuthenticated: role === "admin" };
};
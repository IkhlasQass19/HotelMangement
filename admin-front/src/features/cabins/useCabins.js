import { useQuery } from "@tanstack/react-query";
import { fetchCabins } from "../../services/apiCabins";

export const useCabins = () => {
	// React Query Hook to consume query
	const {
		data: cabins,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["cabins"],
		queryFn: fetchCabins,
	});

	return { cabins, isLoading, error };
};

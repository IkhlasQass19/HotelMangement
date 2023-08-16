import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	// 1. Get authenticaed user's Info (Custom Hook)
	const { isLoading, isAuthenticated } = useUser();

	// 2. No authentication, redirect to /login
	useEffect(() => {
		// User isn't authenticated after fetching session
		if (!isAuthenticated && !isLoading) navigate("/login");
	}, [isAuthenticated, isLoading, navigate]);

	// 3. Spinner while loading
	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	// 4. Give access if authorized user
	if (isAuthenticated) return children;
};

export default ProtectedRoute;

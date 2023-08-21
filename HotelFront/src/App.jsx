import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import "../src/assets/scss/style.scss";
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Cabins from "./pages/Cabins";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Checkin from "./pages/Checkin";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import SignupForm from "./features/authentication/SignupForm";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// staleTime: 60 * 1000,
			staleTime: 0,
		},
	},
});

const App = () => {
	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<GlobalStyles />
				<BrowserRouter>
					<Routes>
						{/* LandingPage as the main page */}
						<Route path="/" element={<LandingPage />} />

						{/* Protected routes */}
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}
						>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="bookings" element={<Bookings />} />
							<Route path="bookings/:bookingId" element={<Booking />} />
							<Route path="checkin/:bookingId" element={<Checkin />} />
							<Route path="cabins" element={<Cabins />} />
							<Route path="account" element={<Account />} />
							<Route path="settings" element={<Settings />} />
							<Route path="users" element={<Users />} />
						</Route>

						{/* Non-protected routes */}
						<Route path="login" element={<Login />} />
						<Route path="*" element={<PageNotFound />} />
						<Route path="properties/:id" element={<DetailsPage />} exact />
						<Route path="example" element={<Example />} />
						

					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: { duration: 3000 },
						error: { duration: 6000 },
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 12px",
							backgroundColor: "var(--color-grey-0)",
							color: "var(--color-grey-800)",
						},
					}}
				/>
			</QueryClientProvider>
		</DarkModeProvider>
	);
};

export default App;

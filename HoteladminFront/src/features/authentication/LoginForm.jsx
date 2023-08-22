import { useState } from "react";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import FormRowVertical from "../../components/FormRowVertical";

import { useAuth } from "./useAuth";
import SpinnerMini from "../../components/SpinnerMini";

function LoginForm() {
	// React State
	const [email, setEmail] = useState("bikita9863@meogl.com");
	const [password, setPassword] = useState("sussywussy");

	// Custom Hook(React Query)
	const { login, isLoading } = useAuth();

	// Handler Functions
	function handleSubmit(e) {
		e.preventDefault();

		if (!email || !password) return;

		login(
			{ email, password },
			{
				onSettled: () => {
					setEmail("");
					setPassword("");
				},
			}
		);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRowVertical label="Email address">
				<Input
					type="email"
					id="email"
					// This makes this form better for password managers
					autoComplete="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<Input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical>
				<Button size="large" disabled={isLoading}>
					{!isLoading ? "Log In" : <SpinnerMini />}
				</Button>
			</FormRowVertical>
		</Form>
	);
}

export default LoginForm;

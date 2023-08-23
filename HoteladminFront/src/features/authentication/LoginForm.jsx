import { useState } from "react";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import FormRowVertical from "../../components/FormRowVertical";

import { useAuth } from "./useAuth";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
	// React State
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const person = {
 
		email:email,
		password:password,
	   
	};
	const navigateTo = useNavigate();

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
	const handleSignInClick = async (event) => {
		event.preventDefault();
	
	
	
		try {
		  const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', person, {
			headers: {
			  'Content-Type': 'application/json',
			  // Your token
			},
		  });
	
		  const accessToken = response.data.token;
		  console.log('Registration successful:', response);
		  localStorage.setItem('accessToken', accessToken);
		  navigateTo('/dashboard')
		 
		  // You might want to redirect the user or show a success message here
		} catch (error) {
		  console.error('Login failed:', error);
		
		  // Handle errors appropriately
		}
	  };
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
			<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
			</FormRowVertical>
		</Form>
	);
}

export default LoginForm;

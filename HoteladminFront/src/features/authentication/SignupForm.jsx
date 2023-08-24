import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";

import { useSignUp } from "./useSignup";

function SignupForm() {
	// Custom Hooks
	const { signup, isLoading } = useSignUp();

	// React Hook Forms
	const { formState, register, getValues, handleSubmit, reset } = useForm();
	const { errors } = formState;

	// Handler Functions
	const onSubmit = ({ email, fullName, password }) => {
		signup(
			{ email, fullName, password },
			{
				// Resetting form inputs after mutation is settled
				onSettled: reset,
			}
		);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormRow label="Full name" error={errors?.fullName?.message}>
				<Input
					type="text"
					id="fullName"
					disabled={isLoading}
					{...register("fullName", {
						required: "Please Fill this field",
					})}
				/>
			</FormRow>

			<FormRow label="Email address" error={errors?.email?.message}>
				<Input
					type="email"
					id="email"
					disabled={isLoading}
					{...register("email", {
						required: "Please Fill this field",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Invalid Email Format",
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Password (min 8 characters)"
				error={errors?.password?.message}
			>
				<Input
					type="password"
					id="password"
					disabled={isLoading}
					{...register("password", {
						required: "Please Fill this field",
						minLength: {
							value: 8,
							message: "Password should be minimum 8 characters",
						},
					})}
				/>
			</FormRow>

			<FormRow
				label="Repeat password"
				error={errors?.passwordConfirm?.message}
			>
				<Input
					type="password"
					id="passwordConfirm"
					disabled={isLoading}
					{...register("passwordConfirm", {
						required: "Please Fill this field",
						validate: (value) =>
							value === getValues().password ||
							"Password need to be same",
					})}
				/>
			</FormRow>

			<FormRow>
				{/* type is an HTML attribute! */}
				<Button variation="secondary" type="reset" onClick={reset}>
					Cancel
				</Button>
				<Button disabled={isLoading}>Create new user</Button>
			</FormRow>
		</Form>
	);
}

export default SignupForm;

import { useState } from "react";

import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
	// Custom hooks
	const {
		user: {
			email,
			user_metadata: { fullName: currentFullName },
		},
	} = useUser();
	const { updateUser, isUpdating } = useUpdateUser();

	// React state for controlled form elements
	const [fullName, setFullName] = useState(currentFullName);
	const [avatar, setAvatar] = useState(null);

	function handleSubmit(e) {
		e.preventDefault();
		if (!fullName) return;

		updateUser(
			{ fullName, avatar },
			{
				onSuccess: () => {
					setAvatar(null);
					e.target.reset();
				},
			}
		);
	}

	const handleCancel = () => {
		setAvatar(null);
		setFullName(currentFullName);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormRow label="Email address">
				<Input value={email} disabled />
			</FormRow>
			<FormRow label="Full name">
				<Input
					type="text"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					disabled={isUpdating}
					id="fullName"
				/>
			</FormRow>
			<FormRow label="Avatar image">
				<FileInput
					id="avatar"
					accept="image/*"
					disabled={isUpdating}
					onChange={(e) => setAvatar(e.target.files[0])}
				/>
			</FormRow>
			<FormRow>
				<Button
					type="reset"
					variation="secondary"
					disabled={isUpdating}
					onClick={handleCancel}
				>
					Cancel
				</Button>
				<Button disabled={isUpdating}>Update account</Button>
			</FormRow>
		</Form>
	);
}

export default UpdateUserDataForm;

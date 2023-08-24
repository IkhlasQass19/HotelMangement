import Heading from "../components/Heading";
import Row from "../components/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
	return (
		<>
			<Heading as="h1">Update your account</Heading>

			<Row>
				<Heading as="h3">Update user data</Heading>
				<UpdateUserDataForm />
			</Row>

			<Row>
				<Heading as="h3">Update password</Heading>
				<UpdatePasswordForm />
			</Row>
		</>
	);
}

export default Account;

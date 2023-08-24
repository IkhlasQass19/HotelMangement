import React from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
	return (
		<div>
			<Modal>
				<Modal.Open opens="cabin-form">
					<Button>Add New Cabin</Button>
				</Modal.Open>
				<Modal.Window name="cabin-form">
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</div>
	);
};

export default AddCabin;

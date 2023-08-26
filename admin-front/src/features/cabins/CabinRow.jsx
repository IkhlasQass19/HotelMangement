import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import CreateCabinForm from "./CreateCabinForm";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Table from "../../components/Table";
import Menus from "../../components/Menus";

const Img = styled.img`
	display: block;
	width: 6.4rem;
	aspect-ratio: 3 / 2;
	object-fit: cover;
	object-position: center;
	transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--color-grey-600);
	font-family: "Sono";
`;

const Price = styled.div`
	font-family: "Sono";
	font-weight: 600;
`;

const Discount = styled.div`
	font-family: "Sono";
	font-weight: 500;
	color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
	// Derived State
	const {
		id: cabinId,
		image,
		name,
		maxCapacity,
		regularPrice,
		discount,
		description,
	} = cabin;

	// Custom Hook
	const { isDeleting, deleteCabin } = useDeleteCabin();
	const { createCabin } = useCreateCabin();

	// Handler Functions
	const duplicateCabin = () => {
		createCabin({
			name: `Copy of ${name}`,
			image,
			maxCapacity,
			regularPrice,
			discount,
			description,
		});
	};

	return (
		<Table.Row role="row">
			<Img src={image} />
			<Cabin>{name}</Cabin>
			<div>Fits up to {maxCapacity} guests</div>
			<Price>{formatCurrency(regularPrice)}</Price>
			{discount ? (
				<Discount>{formatCurrency(discount)}</Discount>
			) : (
				<span>&mdash;</span>
			)}
			<div>
				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={cabinId} />
						<Menus.List id={cabinId}>
							{/* List Item 1 */}
							<Menus.Button
								icon={<HiSquare2Stack />}
								onClick={duplicateCabin}
							>
								Duplicate
							</Menus.Button>
							{/* List Item 2 */}
							<Modal.Open opens="edit">
								<Menus.Button icon={<HiPencil />}>
									Edit
								</Menus.Button>
							</Modal.Open>
							{/* List Item 3 */}
							<Modal.Open opens="delete">
								<Menus.Button icon={<HiTrash />}>
									Delete
								</Menus.Button>
							</Modal.Open>
						</Menus.List>

						<Modal.Window name="edit">
							<CreateCabinForm cabinToEdit={cabin} />
						</Modal.Window>

						<Modal.Window name="delete">
							<ConfirmDelete
								resource="cabin"
								disabled={isDeleting}
								onConfirm={() => deleteCabin(cabinId)}
							/>
						</Modal.Window>
					</Menus.Menu>
				</Modal>
			</div>
		</Table.Row>
	);
};

export default CabinRow;

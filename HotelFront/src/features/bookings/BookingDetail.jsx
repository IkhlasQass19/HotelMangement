import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import styled from "styled-components";

import Row from "../../components/Row";
import Heading from "../../components/Heading";
import Tag from "../../components/Tag";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import BookingDataBox from "./BookingDataBox";
import Spinner from "../../components/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckout } from "../check-in-out/useCheckout";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Empty from "../../components/Empty";

const HeadingGroup = styled.div`
	display: flex;
	gap: 2.4rem;
	align-items: center;
`;

function BookingDetail() {
	const navigate = useNavigate();

	// Custom hooks
	const { booking, isLoading } = useBooking();
	const { checkout, isCheckingOut } = useCheckout();
	const moveBack = useMoveBack();
	const { delBooking, isDeleting } = useDeleteBooking();

	// Conditional render
	if (isLoading) return <Spinner />;
	if (!booking) return <Empty resource="booking" />;

	// Derived State
	const { status, id: bookingId } = booking;

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	const handleDeleteBooking = () => {
		delBooking(bookingId);
		navigate("/bookings");
	};

	return (
		<>
			<Row type="horizontal">
				<HeadingGroup>
					<Heading as="h1">Booking #{bookingId}</Heading>
					<Tag type={statusToTagName[status]}>
						{status.replace("-", " ")}
					</Tag>
				</HeadingGroup>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />

			<ButtonGroup>
				<Button variation="secondary" onClick={moveBack}>
					Back
				</Button>

				<Modal>
					<Modal.Open opens="delete-booking">
						<Button variation="danger">Delete Booking</Button>
					</Modal.Open>

					<Modal.Window name="delete-booking">
						<ConfirmDelete
							resource={`Booking #${bookingId}`}
							onConfirm={handleDeleteBooking}
							disabled={isDeleting}
						/>
					</Modal.Window>
				</Modal>

				{status === "checked-in" && (
					<Button
						icon={<HiArrowUpOnSquare />}
						onClick={() => checkout(bookingId)}
						disabled={isCheckingOut}
					>
						Check out
					</Button>
				)}

				{status === "unconfirmed" && (
					<Button
						onClick={() => {
							navigate(`/checkin/${bookingId}`);
						}}
					>
						Check in
					</Button>
				)}
			</ButtonGroup>
		</>
	);
}

export default BookingDetail;

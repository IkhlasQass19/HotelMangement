import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Menus from "../../components/Menus";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";

import { useBookings } from "./useBookings";
import Pagination from "../../components/Pagination";

function BookingTable() {
	// Custom Hook
	const { bookings, isLoading, count } = useBookings();

	if (isLoading) return <Spinner />;

	if (!bookings.length) return <Empty />;

	return (
		<Menus>
			<Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
				<Table.Header>
					<div>Cabin</div>
					<div>Guest</div>
					<div>Dates</div>
					<div>Status</div>
					<div>Amount</div>
					<div></div>
				</Table.Header>

				<Table.Body
					data={bookings}
					render={(booking) => (
						<BookingRow key={booking.id} booking={booking} />
					)}
				/>
				<Table.Footer>
					<Pagination count={count} />
				</Table.Footer>
			</Table>
		</Menus>
	);
}

export default BookingTable;

import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Menus from "../../components/Menus";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import axios from "axios";
import  {useState,useEffect} from 'react';
import Pagination from "../../components/Pagination";

function BookingTable() {
	
	// Custom Hook
	//const { bookings, isLoading, count } = useBookings();
	const [bookings, setBookings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [count, setCount] = useState(0);
	const storedUserData = localStorage.getItem("user");
	const parsedUserData = JSON.parse(storedUserData);
	const token=parsedUserData.token;
	console.log("hhhits tabke"+token);
	useEffect(() => {
	  async function fetchBookings() {
		console.log("salaaam");
		try {
			const response = await axios.get("http://localhost:8080/reservations/all", {
				'headers': {
				  'Authorization': `Bearer ${token}`, 
				}, });
		console.log("waa repnse bani"+response);
		  setBookings(response.data);
		  setCount(response.data.length);
		  setIsLoading(false);
		} catch (error) {
		console.log("errorrr oumnia bouzga"+error);
		  console.error(error);
		  //setIsLoading(false);
		}
	  }
  
	  fetchBookings();
	}, []);
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
						<BookingRow key={booking.id_reservation} booking={booking} />
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

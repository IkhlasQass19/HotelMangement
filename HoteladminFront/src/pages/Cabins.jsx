import Heading from "../components/Heading";
import Row from "../components/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All cabins</Heading>
				<CabinTableOperations />
			</Row>
			<Row>
				<CabinTable />
				<AddCabin />
			</Row>
		</>
	);
}

export default Cabins;

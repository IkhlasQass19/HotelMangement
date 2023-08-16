import Heading from "../components/Heading";
import Row from "../components/Row";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">Dashboard</Heading>
				<DashboardFilter />
			</Row>

			<DashboardLayout />
		</>
	);
}

export default Dashboard;

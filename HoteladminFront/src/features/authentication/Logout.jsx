import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../components/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../components/SpinnerMini";

const Logout = () => {
	const { logout, isLoading } = useLogout();

	return (
		<ButtonIcon disabled={isLoading} onClick={logout}>
			{!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
		</ButtonIcon>
	);
};

export default Logout;

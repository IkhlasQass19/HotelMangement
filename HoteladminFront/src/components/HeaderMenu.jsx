import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
	display: flex;
	gap: 0.4rem;
`;

const HeaderMenu = () => {
	// Router-DOM Hooks
	const navigate = useNavigate();

	return (
		<StyledHeaderMenu>
			<li>
				<ButtonIcon onClick={() => navigate("/account")}>
					<HiOutlineUser />
				</ButtonIcon>
			</li>
			<li>
				<DarkModeToggle />
			</li>
			<li>
				<Logout />
			</li>
		</StyledHeaderMenu>
	);
};

export default HeaderMenu;

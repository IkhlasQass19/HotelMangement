import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";

import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = () => {
	// Consuming context from provider
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<ButtonIcon onClick={toggleDarkMode}>
			{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
		</ButtonIcon>
	);
};

export default DarkModeToggle;

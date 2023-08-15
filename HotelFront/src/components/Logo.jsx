import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 9.6rem;
	width: auto;
`;

function Logo() {
	// Consuming context from provider
	const { isDarkMode } = useDarkMode();

	return (
		<StyledLogo>
			<Img
				src={`/logo-${isDarkMode ? "dark" : "light"}.png`}
				alt="Logo"
			/>
		</StyledLogo>
	);
}

export default Logo;

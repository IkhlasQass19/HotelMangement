import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

// Context provider
const DarkModeProvider = ({ children }) => {
	// State
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		window.matchMedia("(prefers-color-scheme: dark)").matches,
		"isDarkMode"
	);

	// Setting global styles as a side-effect
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark-mode");
			document.documentElement.classList.remove("light-mode");
		} else {
			document.documentElement.classList.add("light-mode");
			document.documentElement.classList.remove("dark-mode");
		}
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode((dark) => !dark);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

// Custom hook
const useDarkMode = () => {
	const context = useContext(DarkModeContext);

	if (context === undefined)
		throw new Error("Context was used outside its provider");

	return context;
};

export { DarkModeProvider, useDarkMode };

import { useState, useContext, createContext } from "react";

const ThemeContext = createContext(null);

function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
		</Panel>
	)
}

function Panel({ title, children }) {
	const theme = useContext(ThemeContext);
	const className = `panel-${theme}`

	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	)
}

function Button({ children }) {
	const theme = useContext(ThemeContext);
	const className = `button-${theme}`

	return (
		<button className={className}>
			{children}
		</button>
	)
}

export default function Context() {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={theme}>
			<Form />
			<label>
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={event => setTheme(event.target.checked ? "dark" : "light")}
				/>
				Use DARK mode
			</label>
		</ThemeContext.Provider>
	)
}
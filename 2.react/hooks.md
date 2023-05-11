# Hooks (Хуки)

## useContext
Это REACT Hook, который позволяет пробрасывать переменные по всему приложению, не используя props.
1. Создаем главный компонент
```js
import { useState, useContext, createContext } from "react";
const ThemeContext = createContext(null);
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
```
Этот компонент передается в `<App />`
```js
import Context from './hooks/context';
function App() {
  return (
    <div>
      <Context />
    </div>
  );
}
export default App;
```

При помощи `const ThemeContext = createContext(null)` создаем контекст, и далее пробрасываем ему по приложению при помощи `<ThemeContext.Provider value={theme}>`. 

Далее в компонентах "подписываемся" на этот контекст и используем его:
```js
function Form() {
	return (
		<Panel title="Welcome">
			<Button>Sign up</Button>
			<Button>Log in</Button>
		</Panel>
	)
}

function Panel({title, children}) {
	const theme = useContext(ThemeContext);
	const className = `panel-${theme}`
	return (
		<section className={className}>
			<h1>{title}</h1>
			{children}
		</section>
	)
}

function Button({children}) {
	const theme = useContext(ThemeContext);
	const className = `button-${theme}`
	return (
		<button className={className}>
			{children}
		</button>
	)
}
```

## useCallback 
Это REACT Hook, который позволяет кэшировать функции между повторными рендерами страницы
```js

```
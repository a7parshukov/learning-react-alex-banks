import Menu from "./components/Menu.js"
import data from "./data/recipes.json"
import './App.css';

function App() {
  return (
    <Menu recipes={data} />
  );
}

export default App;

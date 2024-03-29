import { useState } from "react";
import colorData from "./color/color-data.json";
import ColorList from "./color/ColorList";
import AddColorForm from "./components/AddColorForm";

const App = () => {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id === id ? { ...color, rating } : color);
          setColors(newColors);
        }}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
      />
      <AddColorForm />
    </>
  );
}

export default App

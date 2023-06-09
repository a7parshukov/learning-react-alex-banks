import React, { useState } from "react";
import colorData from "./data/colors-data.json";
import ColorList from "./components/ColorList";

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <ColorList colors={colors} />
  );
}

export default App;

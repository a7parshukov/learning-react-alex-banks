import React, { useState } from "react";

export default function Callback() {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);
  const [items, setItems] = useState([]);

  function handleClickCount() {
    setCount(count + 1)
  }

  function handleClickColor() {
    setColored(colored => !colored)
  }

  const styles = {
    color: colored ? "red" : "black"
  }

  const generateItems = () => {
    return new Array(count).fill(" ").map((_, i) => `Элемент ${i + 1}`)
  }

  return(
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button onClick={handleClickCount}>Добавить</button>
      <button onClick={handleClickColor}>Изменить</button>
      <ul>
        {generateItems.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  )
}
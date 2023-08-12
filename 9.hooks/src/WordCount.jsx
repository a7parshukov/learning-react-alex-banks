import { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState(); // деструктуризация массива - интересует только функция, не переменная

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender); // функция очистки
  }, []);
}

// eslint-disable-next-line react/prop-types
export const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  const words = children.split(" ");

  useEffect(() => {
    console.log("fresh rander");
  }, [words])

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  )
}
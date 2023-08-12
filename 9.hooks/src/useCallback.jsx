import { useCallback } from "react";
import { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState(); // деструктуризация массива - интересует только функция, не переменная

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender); // функция очистки
  }, []);
}

// eslint-disable-next-line react/prop-types
export const WordCount = ({ children }) => {
  useAnyKeyToRender();

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, [])

  useEffect(() => {
    console.log("fresh render");
    fn()
  }, [fn])

  return (
    <>
      <p>{children}</p>
      <p>
        {/* <strong>{words.length} - words</strong> */}
      </p>
    </>
  )
}
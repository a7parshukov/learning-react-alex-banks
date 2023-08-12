import { useState, useEffect, useMemo } from "react";

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

  // const words = children.split(" ");

  const words = useMemo(() => children.split(" "), [children]);
  // мемоизация функции - результат функции вычисляется и кешируется. 
  // затем, когда функция вызывается снова с теми же входными данными - результат достается из кеша
  // useMemo позволяет сранить результаты

  useEffect(() => {
    console.log("fresh render")
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
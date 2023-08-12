import { useState, useEffect } from "react";

// const word = ["w1", "w2", "w3"]; // вынося переменную за пределы основной переменной, мы избавляемся от "обновления массива",

export const Effect = () => {
  const useAnyKeyToRender = () => {
    const [, forceRender] = useState(); // деструктуризация массива - интересует только функция, не переменная

    useEffect(() => {
      window.addEventListener("keydown", forceRender);
      return () => window.removeEventListener("keydown", forceRender); // функция очистки
    }, []);
  }

  useAnyKeyToRender();

  // const word = "gnar"; // отображается один раз (переменная не меняется), нажатия не обрабатываются
  const word = ["word1", "word2", "word3"]; // нажатия обрабатываются. Новый массив "появляется" при каждом рендинге, 
  // поэтому JS предполагает что каждый раз массив - новый, а это считается "обновлением".

  useEffect(() => {
    console.log("fresh render");
  }, [word])

  return (
    <h1>Open the console</h1>
  )
}
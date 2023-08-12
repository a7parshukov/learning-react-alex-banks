import { useState, useEffect } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  // если установить alert тут:
  // alert(`checked : ${checked.toString()}`);
  // то получаем, что сначала будет предупреждение, а потом смена статуса на чекбоксе.
  // Исправить ситуацию можно при помощи useEffect():

  useEffect(() => {
    // console.log(`checked : ${checked.toString()}`)
    localStorage.setItem("checkbox-value", checked)
  });

  // размещение alert внутри функции useEffect означает, 
  // что функция будет вызываться после рендеринга в качестве побочного эффекта
  
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}
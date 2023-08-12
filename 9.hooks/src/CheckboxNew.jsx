import { useReducer } from "react";
// import { useState } from "react";

export const CheckBox = () => {
  // const [checked, setChecked] = useState(false); // вместе useState можно использовать useReducer:
  const [checked, toggle] = useReducer(checked => !checked, false)

  // const toggle = () => {
  //   setChecked(checked => !checked)
  // }

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
    </>
  )
}
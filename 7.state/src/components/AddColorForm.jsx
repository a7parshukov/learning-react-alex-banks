import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

const AddColorForm = ({ onNewColor = f => f }) => {
  const [txtTitle, setTxtTitle] = useInput("");
  const [hexColor, setHexColor] = useInput("#000000");

  const submit = event => {
    event.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          type="text"
          placeholder="color title..."
          required
        />
        <input
          {...colorProps}
          type="color"
          required
        />
        <button>
          Add
        </button>
      </form>
    </>
  )
}

export default AddColorForm;

// НИЖЕ - НЕУПРАВЛЯЕМЫЙ ВАРИАНТ КОМПОНЕНТА (НЕ ИСПОЛЬЗОВАТЬ! ❌)
// import React, {useRef} from "react";

// const AddColorForm = ({ onNewColor = f => f }) => {
//   const txtTitle = useRef();
//   const hexColor = useRef();

//   const submit = e => {
//     e.preventDefault();
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     onNewColor(title, color);
//     txtTitle.current.value = "";
//     hexColor.current.value = "";
//   }

//   return (
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder="color title ..." required />
//       <input ref={hexColor} type="color" required />
//       <button>Add</button>
//     </form>
//   );
// }

// export default AddColorForm;
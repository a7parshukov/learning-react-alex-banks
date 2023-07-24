import React, { useState } from "react";

const AddColorForm = ({ onNewColor = f => f }) => {
  const [txtTitle, setTxtTitle] = useState("");
  const [hexColor, setHexColor] = useState("#000000");

  const submit = e => {
    e.preventDefault();
    onNewColor(txtTitle, hexColor);
    setTxtTitle("");
    setHexColor("#000000");
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={txtTitle}
          onChange={event => setTxtTitle(event.target.value)}
          placeholder="color title..."
          required
        />
        <input
          type="color"
          value={hexColor}
          onChange={event => setHexColor(event.target.value)}
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
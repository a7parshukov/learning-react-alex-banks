import { useState } from "react";
// import { Checkbox } from "./Checkbox";
// import { State } from "./State";
// import { Effect } from "./Effect";
import "./App.css";
// import { Layout } from "./Layout";
// import { WordCount } from "./WordCount";
// import { WordCount } from "./useMemo";
// import { WordCount } from "./useCallback";
// import { CheckBox } from "./CheckboxNew";
import { PureCat } from "./Cat";

// return <WordCount>Remember, who you are. Bla-bla-bla</WordCount>

export default function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"])
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />
      ))}
      <button
        onClick={() => setCats([...cats, prompt("please, input new cat`s name:")])}
      >Add a cat</button>
    </>
  )
}
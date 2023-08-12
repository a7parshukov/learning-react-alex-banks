import { useEffect } from "react";
import { useState } from "react";

export const State = () => {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  }

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val])

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`)
  }, [phrase])

  useEffect(() => {
    console.log(`val or phrase change`);
  }, [val, phrase])

  useEffect(() => {
    console.log(`only once`)
  }, [])

  return (
    <>
      <label>Favorite phrase: </label>
      <input
        value={val}
        placeholder={phrase}
        onChange={event => setVal(event.target.value)}
      />
      <button onClick={createPhrase}>SEND</button>
    </>
  )
}
import React, { useState } from "react";

export default function App() {
  const [isToggle, setIsToggle] = useState(true);

  const toggleChange = ()=>{
    setIsToggle(!isToggle)

  }

  return (
    <>
    <div>
      <input
        type="radio"
        value={true}
        name="toggle"
        checked={isToggle}
        onChange={toggleChange}
      />
      <label>Yes </label>
      <input
        type="radio"
        value={false}
        name="toggle"
        onChange={toggleChange}
      />
    <label>No </label>
    </div>
    {
       isToggle ? (<h1> Yes values</h1>):
       (<h1> No values</h1>)
     }
    </>
  );
}
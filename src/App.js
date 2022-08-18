import React, { useState } from "react";

export default function App() {
  const [isToggle, setIsToggle] = useState(true);
  console.log(isToggle);

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
   Answered
    </div>
     {
       isToggle ? (<h1> Unanswered Questions</h1>):
       (<h1> Answered Questions</h1>)
     }
    </>
  );
}
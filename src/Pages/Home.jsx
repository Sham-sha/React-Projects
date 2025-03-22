import React, { useRef, useState } from "react";

function Home() {
  // string
  const [username, setUsername] = useState("");
  // useRef
  const inputRef = useRef();

  const handleClick = () => {
    // console.log("button is clicked");
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="username"
        placeholder="Enter your name"
        defaultValue={username}
        // onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Home;

// onchange updating the state
// const handleChange = (e) => {
//   console.log(e.target.value);
//   setUsername(e.target.value);
// };

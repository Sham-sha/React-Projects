import React, { useState, useReducer } from "react";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  function reducer(state, action) {
    // condition
    // if else -> 1 or 2
    // switch case -> > 2
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload };
      case "password":
        return { ...state, password: action.payload };
      default:
        return { ...state };
    }
  }

  // definition
  const [state, dispatch] = useReducer(reducer, initialState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch
    // username
    // password
    dispatch({ type: "username", payload: username });
    dispatch({ type: "password", payload: password });
  };

  // dispatch -> sending from tags (input / button click) to the store
  // action -> what you are sending
  // 2 parameters - action.type () & action.payload (whatever content)

  return (
    <div className="container" style={{ border: "1px solid black" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            defaultValue={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Click</button>
      </form>
      <span>{state.username}</span>
      <span>{state.password}</span>
    </div>
  );
}

export default Login;

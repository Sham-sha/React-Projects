import React from "react";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleNavigate}>Move to Home</button>
    </div>
  );
}

export default Login;

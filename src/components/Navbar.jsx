import React from "react";
import {NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="logo">Sham</div>
      <ul>
      <NavLink to='/'  ><li>Home</li></NavLink>
      <NavLink to='/about'><li>About</li></NavLink>
      <NavLink to='/to-do-list'><li>To Do List</li></NavLink>
      </ul>
      <button onClick={()=>navigate("/login",{replace:true})}>Login</button>
    </div>
  );
}

export default Navbar;
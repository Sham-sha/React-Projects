import React from "react";
import { NavLink , Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Sham</div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"to_do_list"}>To Do List </NavLink>
        </li>
      </ul>
      <button> <Link to={"login"}>Login</Link></button>
    </div>
  );
}

export default Navbar;

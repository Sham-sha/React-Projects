import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Product() {

  let[count, setCount] = useState(0);
  let[count1, setCount1] = useState(0);

  // useEffect(() => {
  //   console.log("1 This effect will run after every render");
  // });

  // useEffect(() => {
  //   console.log("2 This effect will run only initial render Page render");
  // },[]);

  useEffect(() => {
    console.log("3 This effect will run only dependency change");
  },[count]);

  useEffect(() => {
    console.log("4This effect will run only dependency change");
  },[count1]);

  console.log("initial render");

  return (
    <div>
      <h1>Product</h1>
      <h3>{count}</h3>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Increase
      </Button>
      <Button variant="primary" onClick={() => setCount1(count1 + 1)}>
        Increase Count 1
      </Button>
      <NavLink to={"list"}>Product LIst</NavLink>
      <NavLink to={"details"}>Product Details</NavLink>
      <Outlet />
    </div>
  );
}

export default Product;

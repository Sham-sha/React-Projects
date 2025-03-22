import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import ToDoList from "./Pages/ToDoList";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/to_do_list" element={<ToDoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

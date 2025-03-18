import React from "react";
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import './App.css'
import ToDoList from "./Pages/ToDoList";
// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layout/RootLayout";
import Login from "./Pages/Login";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="to-do-list" element={<ToDoList/>}/>
        <Route path="login" element={<Login/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
 
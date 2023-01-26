import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./context/tasks";
import React from "react"
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {

 

  return (
   <BrowserRouter>
   <TaskProvider>
    <div className="container">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  </TaskProvider> 
  </BrowserRouter>
  );
}

export default App;

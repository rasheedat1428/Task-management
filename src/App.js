import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskProvider } from "./context/tasks";

import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
   <BrowserRouter>
   <TaskProvider>
    <div className="container">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </TaskProvider> 
  </BrowserRouter>
  );
}

export default App;

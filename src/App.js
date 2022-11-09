import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { TaskProvider } from "./context/tasks";

import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
   <BrowserRouter>
   <TaskProvider>
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </TaskProvider> 
  </BrowserRouter>
  );
}

export default App;

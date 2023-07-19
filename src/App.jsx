import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import Skills from "./pages/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="w-full h-auto">
        <Navbar />
      <div className="my-bg-dark-gradient ">
        <Home />
        <About />
        <Skills/>
      </div>
      </div>
  );
}

export default App;

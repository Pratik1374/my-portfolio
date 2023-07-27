import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import AnimatedCursor from "react-animated-cursor";
import Bubbles from "./components/Bubbles";

function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Navbar />
      <div className="my-bg-dark-gradient ">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;

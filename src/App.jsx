import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
  return (
      <div className="w-full h-auto overflow-x-hidden">
        <Navbar />
      <div className="my-bg-dark-gradient ">
        <Home />
        <About />
        <Skills/>
        <Work/>
      </div>
      </div>
  );
}

export default App;

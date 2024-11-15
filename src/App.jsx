import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Experience from "./pages/Experience";
import ThankYouConfettiBurst from "./pages/ThankYouSection";

function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Navbar />
      <div className="my-bg-dark-gradient px-6 space-y-32">
        <Home />
        <About />
        <Experience/>
        <Skills />
        <Work />
        <Certificates/>
        <ThankYouConfettiBurst/>
      </div>
    </div>
  );
}

export default App;

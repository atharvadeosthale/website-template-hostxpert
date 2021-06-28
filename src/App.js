import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Pricing from "./Pricing";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Pricing />
    </div>
  );
}

export default App;

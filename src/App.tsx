import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Map";
import Contact from "./pages/Contact";
import ToastContainer from "./hooks/ToastContainer";
import Footer from "./pages/Footer";
import Gallary from "./pages/Gallary";

function App() {
  return (
    <>
      <div className="relative">
        <ToastContainer />
      </div>
      <Navbar />
      <Home />
      <About />
      <Gallary />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

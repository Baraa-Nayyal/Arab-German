import Navbar from "./components/Navbar";
import About from "./pages/Events";
import Home from "./pages/Home";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";
import Contact from "./pages/Contact";
import ToastContainer from "./hooks/ToastContainer";
import Footer from "./pages/Footer";
import Gallary from "./pages/Gallary";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import GallaryFull from "./pages/GallaryFull";

const Pages = () => {
  return (
    <div id="homePage">
      <div className="relative">
        <ToastContainer />
      </div>
      <Home />
      <About />
      <Gallary />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Contact />
      <Map />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Pages />
            </MainLayout>
          }
        />

        {/* <Route
          path="/Startseite"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        /> */}
        <Route
          path="/Veranstaltungen"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/Galerie"
          element={
            <MainLayout>
              <GallaryFull />
            </MainLayout>
          }
        />
        <Route
          path="/Ziele"
          element={
            <MainLayout>
              <Section3 />
            </MainLayout>
          }
        />
        <Route
          path="/Aktivitäten"
          element={
            <MainLayout>
              <Section4 />
            </MainLayout>
          }
        />
        <Route
          path="/Mitgliedschaft"
          element={
            <MainLayout>
              <Section5 />
            </MainLayout>
          }
        />
        <Route
          path="/Kontakt"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

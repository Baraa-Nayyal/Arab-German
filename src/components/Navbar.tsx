import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-[#fdfcdc88]"); // Change to your desired background color
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full p-6 ${bgColor} transition-colors duration-300`}
      >
        {/* Big Nav */}
        <div className="hidden lg:flex container mx-auto px-10 gap-x-10 justify-between">
          <div>
            <img src="/logo.png" className="w-[250px]" />
          </div>
          <div className="flex justify-between items-center gap-10 w-[800px] flex-1 ">
            <NavLinks mode="navbar" isMobileScreen={isOpen} />
          </div>
        </div>

        {/* Burger Btn */}
        <div className="lg:hidden px-3 relative z-50 flex justify-between items-center ">
          <button
            className="rounded-fullp-2 flex justify-center items-center rounded-full text-sm bg-[#FDFCDC] w-10 h-10 text-[#219dbc]"
            onClick={toggleNav}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <div>
            <img src="/logo.png" className="w-[200px]" />
          </div>
        </div>

        {/* ℹ️ Mobile Nav */}
        <div
          className={`flex basis-full z-40 gap-y-6 flex-col items-center justify-center backdrop-blur-xl w-screen h-screen fixed transition-all ease-in-out duration-300  top-0 ${
            isOpen ? "left-0" : "left-[-120%]"
          }`}
        >
          <NavLinks
            toggle={() => {
              setIsOpen(false);
            }}
            mode="navbar"
            isMobileScreen={isOpen}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

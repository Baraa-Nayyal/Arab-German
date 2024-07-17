import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavLinks = ({
  mode,
  isMobileScreen,
  toggle,
}: {
  mode: "navbar" | "footer";
  isMobileScreen: boolean;
  toggle?: () => void;
}) => {
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const navigate = useNavigate();

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string,
    value: number
  ) => {
    if (toggle) {
      toggle();
    }

    event.preventDefault();
    setActiveHash(hash);
    navigate(`/${hash}`); // Navigate to the root with the hash

    const element = document.querySelector(hash);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - value; // Adjust the offset as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust to your header height
      const sections = document.querySelectorAll("section"); // Use the relevant selector for your sections
      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveHash(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } `
        }
        to="/"
      >
        Startseite
      </NavLink> */}

      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec6" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#home", 100)}
      >
        Startseite
      </a>

      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Veranstaltungen"
      >
        Veranstaltungen
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Galerie"
      >
        Galerie
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Ziele"
      >
        Ziele
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Aktivitäten"
      >
        Aktivitäten
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Mitgliedschaft"
      >
        Mitgliedschaft
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `cursor-pointer ${mode === "footer" ? "text-white" : "text-black"} ${
            isMobileScreen && "navLink"
          } ${isActive ? "underline font-bold" : ""}`
        }
        to="/Kontakt"
      >
        Kontakt
      </NavLink>
    </>
  );
};

export default NavLinks;

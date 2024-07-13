import { useEffect, useState } from "react";

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
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        } ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#home" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#home", 0)}
      >
        Startseite
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${activeHash === "#sec2" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec2", 100)}
      >
        Veranstaltungen
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec8" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec8", 300)}
      >
        Galerie
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec3" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec3", 0)}
      >
        Ziele
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        } ${activeHash === "#sec4" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec4", 100)}
      >
        Aktivitäten
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec5" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec5", 0)}
      >
        Mitgliedschaft
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec6" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec6", 100)}
      >
        Finanzierung
      </a>
      <a
        className={`cursor-pointer ${
          mode === "footer" ? "text-white" : "text-black"
        }  ${
          isMobileScreen &&
          "border-[#219dbc] border-solid  border-t-0 border-r-0 border-l-0 border-b-2 pb-5 w-full text-center "
        }  ${activeHash === "#sec7" ? "font-bold underline active" : ""}`}
        onClick={(event) => scrollToSection(event, "#sec7", 100)}
      >
        Kontakt
      </a>
    </>
  );
};

export default NavLinks;

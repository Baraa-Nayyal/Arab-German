import React from "react";
import NavLinks from "../components/NavLinks";

const Footer = () => {
  return (
    <>
      <div className="w-full -mb-2">
        <img className="w-full" src="/map.png" />
      </div>
      <div className="flex flex-col lg:flex-row  justify-center lg:justify-between items-center px-24 gap-10 lg:gap-16 footer text-white py-10">
        <div className="w-auto lg:w-[30%]">
          <span className="block font-bold text-center lg:text-left text-[24px] lg:text-[32px] text-white">
            Die Deutsch-Arabische Gemeinschaft
          </span>
          <div className="flex mt-3 gap-4 justify-between w-full lg:w-1/3">
            <a href="" target="_blank">
              <img src="/Iconface.svg" />
            </a>

            <a href="" target="_blank">
              <img src="/Iconinsta.svg" />
            </a>

            <a href="" target="_blank">
              <img src="/Iconlink.svg" />
            </a>

            <a href="" target="_blank">
              <img src="/Iconyt.svg" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap w-fit h-fit flex-1 justify-between gap-12">
          <NavLinks mode="footer" isMobileScreen={false} />
        </div>
        <div>
          <div className="text-center md:text-left text-sm">
            <div>
              <span className="font-bold block">Präsident des Vereins: </span>
              <span className="block">
                Dr. Jalal Barout Tel. 0049/1608350767
              </span>
            </div>
            <div>
              <span className="font-bold block">Vizepräsident: </span>
              <span className="block">Mohamed Mousa</span>
            </div>
            <div>
              <span className="font-bold block">Postanschrift: </span>
              <span className="block">
                Johann-Herrmann-straße 1 <br />
                97078 Würzburg
              </span>
            </div>
            <div>
              <span className="font-bold block">Präsident des Vereins: </span>
              <span className="block">
                Dr. Jalal Barout Tel. 0049/1608350767
              </span>
            </div>
            <div>
              <span className="font-bold block">E-Mail: </span>
              <span className="block">d.a.gemeinschaft@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const mainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default mainLayout;

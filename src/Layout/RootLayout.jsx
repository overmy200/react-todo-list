import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="px-4 md:px-6 pt-12 pb-24 w-full xl:w-[45%] space-y-6">
            <Outlet/>
        </div>
      </main>
      <Footer />
      <ToastContainer transition={Slide}/>
    </>
  );
};

export default RootLayout;

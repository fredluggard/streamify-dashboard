import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { SiBoxysvg } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

export const DashboardLayout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  // For checking screen to aid proper display based on screen size
  useEffect(() => {
    let previousWidth = window.innerWidth;
    const handleResize = () => {
      if (window.innerWidth !== previousWidth) {
        previousWidth = window.innerWidth;
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width <= 550) {
    return (
      <div className="w-full h-full overflow-y-scroll bg-gray-900 text-white">
        {children}
      </div>
    );
  }
  return (
    <div className="flex md:w-screen md:h-screen">
      {/* Side Bar */}
      <div className="relative md:min-w-[12%] md:w-[15%] md:h-screen text-white bg-gray-800">
        <section className="flex gap-1 justify-center items-center md:py-[2rem]">
          <img
            className="md:w-[1.5rem] lg:w-[1.875rem]"
            src={logo}
            alt="logo"
          />
          <h1 className="md:text-[.8125rem] lg:text-[1.125rem]">Streamify</h1>
        </section>

        <section className="flex flex-col justify-center items-center">
          <div>
            <NavLink to="">
              <li className="flex gap-1 items-center mb-3">
                <MdHome size={20} style={{ color: "blue" }} />
                <h2 className="md:text-[.8125rem] lg:text-[1.125rem]">
                  Dashboard
                </h2>
              </li>
            </NavLink>

            <NavLink to="">
              <li className="flex gap-1 items-center">
                <SiBoxysvg size={20} style={{ color: "blue" }} />
                <h2 className="md:text-[.8125rem] lg:text-[1.125rem]">
                  Explore
                </h2>
              </li>
            </NavLink>
          </div>
        </section>

        <section className="relative top-[70%] flex flex-col justify-center items-center">
          <div>
            <NavLink to="">
              <li className="flex gap-1 items-center">
                <IoSettingsOutline size={20} style={{ color: "blue" }} />
                <h2 className="md:text-[.8125rem] lg:text-[1.125rem]">
                  Settings
                </h2>
              </li>
            </NavLink>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div className="w-full h-full overflow-y-scroll bg-gray-900 text-white">
        {children}
      </div>
    </div>
  );
};

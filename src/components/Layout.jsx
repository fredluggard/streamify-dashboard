import React from "react";
import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { SiBoxysvg } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex md:w-screen md:h-screen">
      <div className="relative md:w-[15%] md:h-screen text-white bg-gray-800">
        <section className="flex gap-1 justify-center items-center md:py-[2rem]">
          <img className="md:w-[1.875rem]" src={logo} alt="logo" />
          <h1 className="text-[1.125rem]">Streamify</h1>
        </section>

        <section className="flex flex-col justify-center items-center">
          <div>
            <NavLink to="">
              <li className="flex gap-1 items-center mb-3">
                <MdHome size={20} style={{ color: "blue" }} />
                <h2>Dashboard</h2>
              </li>
            </NavLink>

            <NavLink to="">
              <li className="flex gap-1 items-center">
                <SiBoxysvg size={20} style={{ color: "blue" }} />
                <h2>Explore</h2>
              </li>
            </NavLink>
          </div>
        </section>

        <section className="relative top-[70%] flex flex-col justify-center items-center">
          <div>
            <NavLink to="">
              <li className="flex gap-1 items-center">
                <IoSettingsOutline size={20} style={{ color: "blue" }} />
                <h2>Settings</h2>
              </li>
            </NavLink>
          </div>
        </section>
      </div>
      <div className="w-full h-full bg-gray-900 text-white">{children}</div>
    </div>
  );
};

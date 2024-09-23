import React from "react";
import "./App.css";
import { user } from "./assets";
import { DashboardLayout } from "./components/Layout";
import { CiSearch } from "react-icons/ci";
import MetricCard from "./components/DashboardCards/MetricCard";
import ActiveUsersCard from "./components/DashboardCards/ActiveUsersCard";
import ActiveUsersPieCard from "./components/DashboardCards/ActiveUsersPieCard";
import TotalStreamsCard from "./components/DashboardCards/TotalStreamsCard";
import RevenueCard from "./components/DashboardCards/RevenueCard";

function App() {
  return (
    <>
      <div>
        <DashboardLayout>
          <div className="flex flex-col gap-10 mx-[3.125rem] mt-[1.5rem]">
            <nav className="flex justify-between items-center">
              {/* Search bar */}
              <div className="md:w-[43.75rem] md:h-[45px] border border-gray-800 rounded-full bg-gray-800 px-2 flex gap-1 items-center">
                <CiSearch size={25} style={{ color: "blue" }} />
                <input
                  className="w-full h-full bg-transparent outline-none placeholder:text-gray-500"
                  type="text"
                  placeholder="Search by Artist, Song or Album"
                />
              </div>

              {/* logged user */}
              <div className="flex gap-2 items-center cursor-pointer">
                <p>Admin</p>
                <img className="w-[30px] rounded-full" src={user} alt="user" />
              </div>
            </nav>

            {/* main content */}
            <div>
              <div className="flex flex-col gap-4">
                <MetricCard />
                <div className="flex gap-2">
                  <div className="md:w-1/2">
                    <ActiveUsersCard />
                  </div>
                  <div className="md:w-1/2">
                    <ActiveUsersPieCard />
                  </div>
                </div>
                <TotalStreamsCard />
                <RevenueCard />
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </>
  );
}

export default App;

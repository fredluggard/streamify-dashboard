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
import TopArtists from "./components/DashboardCards/TopArtists";
import TopStreamsCard from "./components/DashboardCards/TopStreamsCard";
import RecentStream from "./components/DashboardCards/RecentStream";

function App() {
  return (
    <>
      <div>
        <DashboardLayout>
          <div className="flex flex-col gap-10 mx-[1rem] md:mx-[3.125rem] my-[1.5rem]">
            <nav className="flex gap-2 justify-between items-center">
              {/*The Search bar */}
              <div className="w-[80%] md:w-[60%] h-[40px] lg:h-[45px] border border-gray-800 rounded-full bg-gray-800 px-2 flex gap-1 items-center">
                <CiSearch size={25} style={{ color: "blue" }} />
                <input
                  className="w-full h-full bg-transparent outline-none placeholder:text-gray-500 placeholder:md:text-[14px] placeholder:lg:text-[1rem]"
                  type="text"
                  placeholder="Search by Artist, Song or Album"
                />
              </div>

              {/* logged user */}
              <div className="flex gap-2 items-center cursor-pointer">
                <p className="hidden md:block text-[.8125rem] lg:text-[1.125rem]">
                  Admin
                </p>
                <img
                  className="w-[1.5625rem] lg:w-[1.875rem] rounded-full"
                  src={user}
                  alt="user"
                />
              </div>
            </nav>

            {/* main content */}
            <div>
              <div className="flex flex-col gap-4">
                <MetricCard />

                <div className="flex flex-col md:flex-row gap-2">
                  <div className="md:w-1/2">
                    <ActiveUsersCard />
                  </div>
                  <div className="md:w-1/2">
                    <ActiveUsersPieCard />
                  </div>
                </div>

                <TotalStreamsCard />
                <RevenueCard />
                <TopArtists />
                <TopStreamsCard />
                <RecentStream />
              </div>
            </div>
          </div>
        </DashboardLayout>
      </div>
    </>
  );
}

export default App;

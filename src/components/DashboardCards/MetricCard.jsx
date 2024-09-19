import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import UserGrowthChart from "../Charts/UserGrowthChart";
import { useUserContext } from "../../context/usersData";

const MetricCard = () => {
  const { totalUsers } = useUserContext();
  return (
    <div className="md:w-full md:h-[430px] flex flex-col bg-blue-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <HiOutlineUsers size={20} />
          <h3 className="text-xl">Total Users</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 mb-5">{totalUsers}</p>
      </section>
      <UserGrowthChart />
    </div>
  );
};

export default MetricCard;

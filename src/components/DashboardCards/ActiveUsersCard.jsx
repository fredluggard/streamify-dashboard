import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { useUserContext } from "../../context/usersData";
import ActiveUsersChart from "../Charts/ActiveUsersChart";

const ActiveUsersCard = () => {
  const { activeUsers } = useUserContext();
  return (
    <div className="md:w-full md:h-[430px] flex flex-col bg-blue-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <HiOutlineUsers size={20} />
          <h3 className="text-xl">Active Users in last 30 days</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 mb-5">{activeUsers}</p>
      </section>
      <ActiveUsersChart />
    </div>
  );
};

export default ActiveUsersCard;

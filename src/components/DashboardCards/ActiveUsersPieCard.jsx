import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { useUserContext } from "../../context/usersData";
import ActiveUsersPieChart from "../Charts/ActiveUsersPieChart";

const ActiveUsersPieCard = () => {
  const {
    activeUsers,
    totalUsers,
    percentActiveUsers,
    updatePercentActiveUsers,
    calculatePercent,
  } = useUserContext();

  const percent = calculatePercent(activeUsers, totalUsers);
  updatePercentActiveUsers(percent);

  return (
    <div className="md:w-full md:h-[430px] flex flex-col bg-gray-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <HiOutlineUsers size={20} />
          <h3 className="text-xl">Percentage of active users</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 mb-5">{`${percentActiveUsers}%`}</p>
      </section>

      <ActiveUsersPieChart />
    </div>
  );
};

export default ActiveUsersPieCard;

import React, { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import RevenueChart from "../Charts/RevenueChart";

const RevenueCard = () => {
const [totalRevenue, setTotalRevenue] = useState(0)

  return (
    <div className="md:w-full md:h-[430px] flex flex-col bg-gray-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <HiOutlineUsers size={20} />
          <h3 className="text-xl">Total Revenue</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 mb-5">{totalRevenue}</p>
      </section>
      <RevenueChart />
    </div>
  );
};

export default RevenueCard;

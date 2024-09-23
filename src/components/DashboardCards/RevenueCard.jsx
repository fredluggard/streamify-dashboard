import React from "react";
import RevenueChart from "../Charts/RevenueChart";
import { useUserContext } from "../../context/usersData";

const RevenueCard = () => {
  const { totalRevenue } = useUserContext();

  return (
    <div className="md:w-full md:h-[530px] flex flex-col bg-gray-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl">Total Revenue</h3>
        </div>
        <p className="text-2xl font-semibold mt-2 mb-5">{`$${totalRevenue}`}</p>
      </section>
      <RevenueChart />
    </div>
  );
};

export default RevenueCard;

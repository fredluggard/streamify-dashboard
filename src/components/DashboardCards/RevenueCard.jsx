import React from "react";
import { BsCashCoin } from "react-icons/bs";
import RevenueChart from "../Charts/RevenueChart";
import { useUserContext } from "../../context/usersData";
import RevenuePieChart from "../Charts/RevenuePieChart";

const RevenueCard = () => {
  const { totalRevenue } = useUserContext();

  return (
    <div className="md:w-full md:h-[33.125rem] flex flex-col md:flex-row gap-2">
      <div className="md:w-1/2 bg-gray-800 shadow-md rounded-lg p-5">
        <section className="md:ml-4">
          <div className="flex gap-2 my-4 items-center">
            <BsCashCoin size={20} />
            <h3 className="text-xl">Total Revenue</h3>
          </div>
          <p className="text-2xl font-semibold mt-2 mb-5">{`$${totalRevenue}`}</p>
        </section>
        <RevenueChart />
      </div>

      <div className="md:w-1/2 bg-gray-800 shadow-md rounded-lg p-5">
        <RevenuePieChart />
      </div>
    </div>
  );
};

export default RevenueCard;

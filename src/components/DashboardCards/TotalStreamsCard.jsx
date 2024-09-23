import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TotalStreamsChart from "../Charts/TotalStreamsChart";
import { useUserContext } from "../../context/usersData";

const TotalStreamsCard = () => {
  const { totalStreams } = useUserContext();

  return (
    <div className="bg-gray-800 text-white rounded-lg p-5 shadow-md md:w-full md:h-[400px] relative">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Total Streams</h3>
        <FiArrowUpRight size={20} />
      </div>

      {/* Total Streams */}
      <div className="text-4xl font-bold mt-4">{totalStreams}</div>

      {/* Bar Chart Section */}
      <div className="w-full h-auto mt-4">
        <TotalStreamsChart />
      </div>
    </div>
  );
};

export default TotalStreamsCard;

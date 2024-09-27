import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { CiStreamOn } from "react-icons/ci";
import TotalStreamsChart from "../Charts/TotalStreamsChart";
import { useUserContext } from "../../context/usersData";

const TotalStreamsCard = () => {
  const { totalStreams } = useUserContext();

  return (
    <div className="bg-gray-800 text-white rounded-lg p-5 shadow-md md:w-full md:h-[500px] relative">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <CiStreamOn size={20} />
          <h3 className="text-lg font-semibold">Total Streams</h3>
        </div>
        <Link to="">
          <FiArrowUpRight size={20} />
        </Link>
      </div>

      {/* Total Streams */}
      <div className="text-2xl font-bold mt-4">{totalStreams}</div>

      {/* Bar Chart Section */}
      <div className="w-full h-auto mt-4">
        <TotalStreamsChart />
      </div>
    </div>
  );
};

export default TotalStreamsCard;

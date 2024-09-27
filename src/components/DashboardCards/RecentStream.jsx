import React, { useState } from "react";
import { CiStreamOn } from "react-icons/ci";
import RecentStreamChart from "../Charts/RecentStreamChart";
import RecentReleaseChart from "../Charts/RecentReleaseChart";

const RecentStream = () => {
  // State to track which filter is selected (recent or most)
  const [filter, setFilter] = useState("recent");

  return (
    <div className="relative bg-gray-800 text-white rounded-lg p-5 shadow-md md:w-full md:h-[31.25rem]">
      {/* Header Section */}
      <div className="flex gap-3 md:gap-1 flex-col md:flex-row justify-between md:items-center">
        <div className="flex gap-2 items-center">
          <CiStreamOn size={20} />
          <h3 className="text-lg font-semibold">
            {filter === "recent"
              ? "Top 5 Recent Streams"
              : "Top 5 Recent Release"}
          </h3>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex space-x-2">
          <button
            className={`px-1 md:px-3 py-1 text-[.875rem] md:text-[1rem] rounded-md ${
              filter === "recent" ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => setFilter("recent")}
          >
            Recent Streams
          </button>
          <button
            className={`px-1 md:px-3 py-1 text-[.875rem] md:text-[1rem] rounded-md ${
              filter === "most" ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => setFilter("most")}
          >
            Recent Release
          </button>
        </div>
      </div>

      {/* Conditional Rendering for Charts */}
      <div className="relative md:top-[1.25rem] w-full h-auto md:mt-4">
        {filter === "recent" ? <RecentStreamChart /> : <RecentReleaseChart />}
      </div>
    </div>
  );
};

export default RecentStream;

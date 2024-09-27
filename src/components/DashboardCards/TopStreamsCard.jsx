import React from "react";
import { MdHeadphones } from "react-icons/md";
import StreamedSongChart from "../Charts/StreamedSongChart";

const TopStreamsCard = () => {
  return (
    <div className="md:w-full md:h-[430px] flex flex-col bg-gray-800 shadow-md rounded-lg p-5">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <MdHeadphones size={20} />
          <h3 className="hidden md:block text-xl">
            Top 5 Streamed Songs in the last 30 days
          </h3>
          <h3 className="md:hidden text-xl">
            Top 5 Streamed Songs
          </h3>
        </div>
      </section>

      <StreamedSongChart />
    </div>
  );
};

export default TopStreamsCard;

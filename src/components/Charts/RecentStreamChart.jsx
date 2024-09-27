import React from "react";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";

const RecentStreamChart = () => {
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "recentStreams";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const recentStreams = data?.data.sort(
    (a, b) => new Date(b.dateStreamed) - new Date(a.dateStreamed)
  );

  return (
    <div className="md:ml-4 overflow-y-scroll md:overflow-y-visible">
      {/* Desktop View */}
      <div className="hidden w-full h-[50px] md:flex gap-2 items-center justify-between my-2 px-4">
        <div className="w-[40px] flex items-center justify-start">
          <p>Rank</p>
        </div>
        <div className="w-[150px] flex gap-2 items-center justify-center">
          <p>Title</p>
        </div>
        <div className="w-[110px] flex items-center justify-center">
          <p>Artist</p>
        </div>
        <div className="w-[200px] flex items-center justify-center">
          <p>Date streamed</p>
        </div>
        <div className="w-[100px] flex items-center justify-center">
          <p>Stream count</p>
        </div>
        <div className="w-[100px] flex items-center justify-center">
          <p>User ID</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full h-[50px] flex md:hidden gap-2 items-center justify-between my-2 px-4">
        <div className="w-[40px] flex items-center justify-start">
          <p>Rank</p>
        </div>
        <div className="w-[200px] flex gap-2 items-center justify-center">
          <p>Title</p>
        </div>
        <div className="w-[200px] flex items-center justify-center">
          <p>Date</p>
        </div>
      </div>

      {recentStreams?.map((item, index) => (
        <div
          key={index}
          className="w-full h-[50px] rounded-lg bg-gray-900 flex gap-2 items-center justify-between my-2 px-4"
        >
          <div className="w-[40px] flex items-center justify-center">
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">{`${
              index + 1
            }.`}</p>
          </div>
          <div className="w-[150px] flex gap-3 items-center justify-start">
            <img
              className="w-[1.5625rem] md:w-[1.875rem] rounded-full"
              src={item.coverImageUrl}
              alt={item.songName}
            />
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">
              {item.songName}
            </p>
          </div>
          <div className="w-[110px] hidden md:flex items-center justify-center">
            <p className="opacity-60">{item.artist}</p>
          </div>
          <div className="w-[200px] flex items-center justify-center">
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">
              {item.dateStreamed}
            </p>
          </div>
          <div className="w-[100px] hidden md:flex items-center justify-center">
            <p className="opacity-60">{item.streamCount}</p>
          </div>
          <div className="w-[100px] hidden md:flex items-center justify-center">
            <p className="opacity-60">{item.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentStreamChart;

import React from "react";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";

const RecentReleaseChart = () => {
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "streams";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const recentRelease = data?.data.sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  return (
    <div className="md:ml-4 overflow-y-scroll md:overflow-y-visible">
      {/* Desktop View */}
      <div className="hidden w-full h-[3.125rem] md:flex gap-2 items-center justify-between my-2 px-4">
        <div className="w-[2.5rem] flex items-center justify-start">
          <p>Rank</p>
        </div>
        <div className="w-[9.375rem] flex gap-2 items-center justify-center">
          <p>Title</p>
        </div>
        <div className="w-[12.5rem] flex items-center justify-center">
          <p>Artist</p>
        </div>
        <div className="w-[6.875rem] flex items-center justify-center">
          <p>Released</p>
        </div>
        <div className="w-[6.25rem] flex items-center justify-center">
          <p>Duration</p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full h-[3.125rem] flex md:hidden gap-2 items-center justify-between my-2 px-4">
        <div className="w-[2.5rem] flex items-center justify-start">
          <p>Rank</p>
        </div>
        <div className="w-[9.375rem] flex gap-2 items-center justify-center">
          <p>Title</p>
        </div>
        <div className="w-[12.5rem] flex items-center justify-center">
          <p>Date</p>
        </div>
      </div>

      {recentRelease?.map((item, index) => (
        <div
          key={index}
          className="w-full h-[3.125rem] rounded-lg bg-gray-900 flex gap-2 items-center justify-between my-2 px-4"
        >
          <div className="w-[2.5rem] flex items-center justify-center">
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">{`${
              index + 1
            }.`}</p>
          </div>
          <div className="w-[9.375rem] flex gap-3 items-center justify-start">
            <img
              className="w-[1.5625rem] md:w-[1.875rem] rounded-full"
              src={item.coverImageUrl}
              alt={item.songTitle}
            />
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">
              {item.songTitle}
            </p>
          </div>
          <div className="w-[12.5rem] hidden md:flex items-center justify-center">
            <p className="opacity-60">{item.artistName}</p>
          </div>
          <div className="w-[6.875rem] flex items-center justify-center">
            <p className="opacity-60 text-[.75rem] md:text-[1rem]">
              {item.releaseDate}
            </p>
          </div>

          <div className="w-[100px] hidden md:flex items-center justify-center">
            <p className="opacity-60">{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentReleaseChart;

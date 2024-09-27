import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";

const StreamedSongChart = () => {
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "streams";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const ranking = data?.data.sort((a, b) => b.streams - a.streams);

  return (
    <div className="relative overflow-y-scroll md:overflow-y-visible md:ml-4 w-full h-[25rem] flex gap-1 flex-col md:flex-row">
      <div className="relative md:top-[.625rem] w-full md:w-1/2 h-[18.75rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={100} height={40} barSize={40} data={data?.data}>
            <XAxis
              stroke="#fff"
              tick={{ fontSize: 14, fill: "#fff" }}
              type="category"
              dataKey="songTitle"
              domain={[0, 4000]}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend />
            <Bar dataKey="streams" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="relative md:-top-[1.5625rem] w-full md:w-[47%] h-full px-2 flex flex-col gap-2 items-center justify-center">
        <div className="w-full text-[.8125rem] flex gap-2 items-center justify-between my-2">
          <div className="w-[2.5rem] flex items-center justify-center">
            <p>Rank</p>
          </div>
          <div className="w-[6.25rem] flex gap-2 items-center justify-center">
            <p>Title</p>
          </div>
          <div className="w-[6.25rem] hidden md:flex items-center justify-center">
            <p>Artist</p>
          </div>
          <div className="w-[6.875rem] flex items-center justify-center">
            <p>No. of Streams</p>
          </div>
        </div>
        {ranking?.map((item, index) => (
          <div
            key={index}
            className="w-full h-[50px] rounded-lg bg-gray-900 flex gap-2 items-center justify-between my-1 px-4"
          >
            <div className="w-[40px] flex items-center justify-start">
              <p className="text-[12px] opacity-60">{`${index + 1}.`}</p>
            </div>
            <div className="w-[150px] flex gap-3 items-center justify-start">
              <img
                className="w-[25px] rounded-full"
                src={item.coverImageUrl}
                alt={item.songTitle}
              />
              <p className="text-[12px] opacity-60">{item.songTitle}</p>
            </div>
            <div className="w-[200px] hidden md:flex items-center justify-center">
              <p className="text-[12px] opacity-60">{item.artistName}</p>
            </div>
            <div className="w-[110px] flex items-center justify-center">
              <p className="text-[12px] opacity-60">{item.streams}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamedSongChart;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useUserContext } from "../../context/usersData";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";

const TotalStreamsChart = () => {
  const { totalStreams, updateTotalStreams } = useUserContext();
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "totalStreamsData";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const overAllStreams = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.streams;
  }, 0);

  updateTotalStreams(parseFloat(overAllStreams));

  const formattedData = data?.data.map((item) => ({
    month: item.month.substring(0, 3),
    streams: item.streams,
    peakStreams: item.peakStreams,
    averageStreamsPerDay: item.averageStreamsPerDay,
    growthRate: item.growthRate,
    isGrowthPositive: item.isGrowthPositive,
  }));

  return (
    <div className="w-full h-[370px] mt-4">
      {data?.data && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData} layout="vertical" barSize={20}>
            <XAxis
              stroke="#fff"
              tick={{ fontSize: 14, fill: "#fff" }}
              type="number"
              domain={[0, 4000]}
            />
            <YAxis
              stroke="#fff"
              tick={{ fontSize: 14, fill: "#fff" }}
              type="category"
              dataKey="month"
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            {/* Bar with actual totalStreams for each month */}
            <Bar dataKey="streams" fill="#D2FF03" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TotalStreamsChart;

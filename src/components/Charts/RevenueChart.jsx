import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { useUserContext } from "../../context/usersData";

const RevenueChart = () => {
  const { updateTotalRevenue } = useUserContext();
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "revenue";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const overAllRevenue = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  updateTotalRevenue(parseFloat(overAllRevenue));
  const formattedData = data?.data;

  return (
    <div className="w-full h-[500px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData} layout="vertical" barSize={20}>
          {/* XAxis for amount */}
          <XAxis
            stroke="#fff"
            tick={{ fontSize: 14, fill: "#fff" }}
            type="number"
            dataKey="amount"
            domain={[0, "dataMax"]}
          />

          {/* YAxis for source */}
          <YAxis
            stroke="#fff"
            tick={{ fontSize: 14, fill: "#fff" }}
            type="category"
            dataKey="source"
            width={100}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Bar for amount */}
          <Bar dataKey="amount" fill="#D2FF03" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;

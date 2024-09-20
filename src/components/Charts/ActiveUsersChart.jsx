import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { useUserContext } from "../../context/usersData";

const ActiveUsersChart = () => {
  const { updateActiveUsers } = useUserContext();
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "growthData";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const totalActiveUsers = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.activeUsers;
  }, 0);

  updateActiveUsers(Number(totalActiveUsers));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={600} height={300} data={data?.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#fff"
          tick={{ fontSize: 14, fill: "#fff" }}
          dataKey="name"
        />
        <YAxis stroke="#fff" tick={{ fontSize: 14, fill: "#fff" }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="activeUsers"
          stroke="#8884d8"
          fillOpacity={0.8}
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsersChart;

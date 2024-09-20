import React from "react";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { useUserContext } from "../../context/usersData";

const UserGrowthChart = () => {
  const { updateNumberOfUsers } = useUserContext();

  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "growthData";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const totalUsers = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.users;
  }, 0);

  updateNumberOfUsers(Number(totalUsers));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        style={{ color: "white" }}
        width={900}
        height={300}
        data={data?.data}
      >
        <XAxis
          stroke="#fff"
          tick={{ fontSize: 14, fill: "#fff" }}
          dataKey="name"
        />
        <YAxis
          stroke="#fff"
          tick={{ fontSize: 14, fill: "#fff" }}
          dataKey="users"
        />
        <Line type="monotone" dataKey="users" stroke="#fff" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default UserGrowthChart;

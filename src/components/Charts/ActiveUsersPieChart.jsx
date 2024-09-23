import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { useUserContext } from "../../context/usersData";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF5A5F",
];

const ActiveUsersPieChart = () => {
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
      <PieChart width={300} height={300}>
        <Pie
          data={data?.data}
          //   cx={200}
          //   cy={110}
          outerRadius={100}
          dataKey="percentActive"
          label
        >
          {data?.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ActiveUsersPieChart;

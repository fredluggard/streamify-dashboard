import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF5A5F",
];

const RevenuePieChart = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "revenue";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  return (
    <div>
      <section className="md:ml-4">
        <div className="flex gap-2 my-1 md:my-4 items-center">
          <BsCashCoin size={20} />
          <h3 className="text-xl">Revenue Sources</h3>
        </div>
      </section>

      <section className="flex flex-wrap gap-2 md:ml-4">
        <p>A complete breakdown of revenue from different sources</p>
      </section>

      {width > 550 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={300} height={300}>
            <Pie
              data={data?.data}
              //   cx={200}
              //   cy={110}
              outerRadius={100}
              dataKey="amount"
              nameKey="source"
            >
              {data?.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart
            width={300}
            height={300}
            margin={{ top: 0, right: 0, left: 0, bottom: -5 }}
          >
            <Pie
              data={data?.data}
              //   cx={200}
              //   cy={110}
              outerRadius={80}
              dataKey="amount"
              nameKey="source"
              label
            >
              {data?.data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default RevenuePieChart;

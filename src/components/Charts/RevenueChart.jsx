import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { useUserContext } from "../../context/usersData";

const RevenueChart = () => {
  const { updateTotalRevenue } = useUserContext();

  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "revenue";

  // Use useFetchUsersData (react-query hook) to fetch data
  const { data, isLoading, isError } = useFetchUsersData({
    endpoint,
    enabled,
    onError,
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Calculate total revenue and update context
  const overAllRevenue = data?.data?.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  updateTotalRevenue(parseFloat(overAllRevenue));

  // Filter data for relevant sources
  const formattedData = data?.data?.filter(
    (item) => item.source === "Ads" || item.source === "Subscriptions"
  );

  // Process the different revenue sources
  const adsRevenueData = data?.data
    ?.filter((item) => item.source === "Ads")
    .reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

  const subscriptionRevenueData = data?.data
    ?.filter((item) => item.source === "Subscriptions")
    .reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

  const otherRevenueData = data?.data
    ?.filter(
      (item) =>
        item.source === "Merchandise" ||
        item.source === "Partnerships" ||
        item.source === "Events" ||
        item.source === "Sponsorships" ||
        item.source === "Donations" ||
        item.source === "Licensing" ||
        item.source === "Royalties" ||
        item.source === "Affiliate"
    )
    .reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

  // Calculate the percentage of each revenue source
  const otherRevenue = parseFloat(
    (otherRevenueData / overAllRevenue) * 100
  ).toFixed(1);
  const subscriptionRevenue = parseFloat(
    (subscriptionRevenueData / overAllRevenue) * 100
  ).toFixed(1);
  const adsRevenue = parseFloat(
    (adsRevenueData / overAllRevenue) * 100
  ).toFixed(1);

  // Construct the chart data
  const chartData = [
    {
      name: "Subscribed",
      value: parseFloat(subscriptionRevenue),
      color: "#C4C4C4",
    }, // Gray
    { name: "Ads", value: parseFloat(adsRevenue), color: "#4D9CFF" }, // Blue
    { name: "Others", value: parseFloat(otherRevenue), color: "#0051FF" }, // Dark Blue
  ];

  // Only render chart when data is available
  return (
    <div className="w-full h-[350px] mt-4 flex gap-1 flex-col items-center justify-center">
      {/* Donut Chart */}
      <div className="relative w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={50}
              outerRadius={100}
              dataKey="value"
              nameKey="name"
              stroke="none"
            >
              {chartData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold">100%</h2>
        </div>
      </div>

      <div className="w-full space-y-4 flex flex-col items-center justify-between">
        {formattedData?.map((item, index) => (
          <div key={index} className="flex gap-4 justify-between items-center">
            <div className="flex gap-4 items-center">
              <span
                className="w-4 h-4"
                style={{ backgroundColor: chartData[index]?.color }}
              ></span>
              <span className="w-[200px] text-sm font-medium">
                {item.source} ({chartData[index]?.value}%)
              </span>
            </div>
            <div className="text-sm font-semibold">${item.amount}</div>
          </div>
        ))}

        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-4 items-center">
            <span
              className="w-4 h-4"
              style={{ backgroundColor: chartData[2]?.color }}
            ></span>
            <span className="w-[200px] text-sm font-medium">
              Others ({chartData[2]?.value}%)
            </span>
          </div>
          <div className="text-sm font-semibold">${otherRevenueData}</div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;

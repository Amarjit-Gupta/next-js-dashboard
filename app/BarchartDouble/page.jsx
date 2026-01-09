"use client"
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Legend, Label } from "recharts";

const formatNumber = (value) => {
  const num = Number(value);
  if (!num) return "0";
  if (num >= 1000) return `${Math.floor(num / 1000)}k`;
  return num.toString();
};

const BarChartDouble = () => {

  const nameShortMap = {
    "Umang Encapsulation": "Encap",
    "Umang Engineering": "Engg.",
    "Umang Global": "UG",
    "Umang Nutraceuticals": "Nutra",
    "Umang Particle Science": "PC",
    "Umang Pharmaceuticals": "Pharma"
  };

  const [webData, setWebData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  const getWebData = async () => {
    try {
      const result = await fetch(
        "https://marketing-dashboard.integerstech.com/analyze/active-users/umang-websites/monthly-comparison"
      );
      const data = await result.json();

      if (Array.isArray(data?.websites)) {
        const chartData = data.websites
          .filter(item => item.id !== "08458e02-892f-40e9-897b-21e750a5d499")
          .map(itm => ({
            title: nameShortMap[itm.name] || itm.name,
            lastMonth: itm.active_users_previous_month,
            currentMonth: itm.active_users_current_month
          }));

        setWebData(chartData);
      }

      setActiveUser(data?.total_active_users_current_month ?? null);
    } catch (err) {
      console.log("something went wrong...");
    }
  };

  useEffect(() => {
    getWebData();
  }, []);

  // console.log("web data ---", webData);

  return (
    <div className="dark p-3 rounded-xl w-full min-w-0 flex flex-col">
      <h2 className="font-semibold mb-3">
        <span className="text-gray-300 text-[10px] lg:text-lg">
          Active Users
        </span>
        &nbsp;&nbsp;
        <span className="text-xs lg:text-lg">
          {activeUser != null ? formatNumber(activeUser) : "--"}
        </span>
      </h2>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={webData} barCategoryGap="20%">
          {/* X Axis */}
          <XAxis
            dataKey="title"
            interval={0}
            tick={{ fontSize: 10, fill: "white" }}
          />
          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: 10, fill: "white" }}
            tickFormatter={formatNumber}
          >
            <Label
              value="Impressions"
              fill="white"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fontSize: 14 }}
            />
          </YAxis>
          {/* Tooltip */}
          <Tooltip formatter={(value) => formatNumber(value)} />
          <Legend content={<CustomLegend />} />
          {/* Last Month */}
          <Bar dataKey="lastMonth" fill="#3b82f6" name="Last month">
            <LabelList
              dataKey="lastMonth"
              dy={-8}
              position="top"
              angle={-90}
              fontSize={10}
              fill="white"
              formatter={formatNumber}
            />
          </Bar>
          {/* Current Month */}
          <Bar dataKey="currentMonth" fill="#22c55e" name="Current month">
            <LabelList
              dataKey="currentMonth"
              dy={-8}
              angle={-90}
              position="top"
              fontSize={10}
              fill="white"
              formatter={formatNumber}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDouble;

/* Custom Legend */
const CustomLegend = () => (
  <div className="flex gap-4 text-xs justify-center">
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-blue-500 inline-block" />
      <span>Last month</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 bg-green-500 inline-block" />
      <span>Current month</span>
    </div>
  </div>
);

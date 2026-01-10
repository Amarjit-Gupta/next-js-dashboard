"use client";
import { useEffect, useState } from "react";
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,LabelList,Legend,Label,} from "recharts";
import toast from 'react-hot-toast';

const formatNumber = (value) => {
  const num = Number(value);
  if (!num) return "0";
  if (num >= 1000) return `${Math.floor(num / 1000)}k`;
  return num.toString();
};

const BarChartSingle = () => {

  const [socialData, setSocialData] = useState([]);
  const [impression, setImpression] = useState(null);

  const nameShortMap = {
    Instagram: "IG",
    Linkedin: "LI",
    Facebook: "FB",
    Youtube: "YT",
    Pinterest: "PT",
    Others: "Oth.",
  };

  const getSocialData = async () => {
    try {
      const result = await fetch(
        "https://marketing-dashboard.integerstech.com/analyze/social/impressions/current-month"
      );
      const data = await result.json();
      if (Array.isArray(data?.platforms)) {
        const sData = data.platforms.map((itm) => ({
          title: nameShortMap[itm.platform_name] || itm.platform_name,
          total_impressions: itm.total_impressions,
        }));
        setSocialData(sData);
      }
      setImpression(data?.total_impressions_all ?? null);
    } catch (err) {
     // console.log("something went wrong...");
      toast.error('something went wrong...',{duration:3000,position:"bottom-right"});
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

  return (
    <div className="dark p-3 rounded-xl w-full min-w-0 flex flex-col">
      <h2 className="font-semibold mb-3">
        <span className="text-gray-300 text-[10px] lg:text-lg">
          Social Impressions{" "}
        </span>
        <span className="text-xs lg:text-lg">
          {impression != null ? formatNumber(impression) : "--"}
        </span>
      </h2>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={socialData}>
          {/* X Axis */}
          <XAxis
            dataKey="title"
            interval={0}
            tick={{ fontSize: 12, fill: "white" }}
          />
          {/* Y Axis */}
          <YAxis
            interval={0}
            tick={{ fontSize: 10, fill: "white" }}
            tickFormatter={formatNumber}
          >
            <Label
              value="Impressions"
              fill="white"
              angle={-90}
              position="insideLeft"
              style={{
                textAnchor: "middle",
                fontSize: 14,
              }}
            />
          </YAxis>
          {/* Tooltip */}
          <Tooltip formatter={(value) => formatNumber(value)} />
          <Legend content={<CustomLegend />} />
          {/* Bar */}
          <Bar dataKey="total_impressions" fill="#22c55e" name="Count">
            <LabelList
              dataKey="total_impressions"
              position="top"
              fontSize={12}
              fill="white"
              formatter={formatNumber}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartSingle;

/* Custom Legend */
const CustomLegend = () => (
  <div className="flex items-center text-xs justify-center gap-2">
    <span className="w-3 h-3 bg-green-500 inline-block" />
    <span>Count</span>
  </div>
);

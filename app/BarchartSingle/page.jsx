// "use client"
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

// const BarChartSingle = () => {

//   const data = [
//     {
//       "title": "Instagram",
//       "ctr": 4.5
//     },
//     {
//       "title": "Facebook",
//       "ctr": 6.2
//     },
//     {
//       "title": "Linkdin",
//       "ctr": 5.8
//     },
//     {
//       "title": "Youtube",
//       "ctr": 5.8
//     },
//     {
//       "title": "Others",
//       "ctr": 5.8
//     },
//   ];


//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
//       <h2 className="text-lg font-semibold mb-3">Social impressions : 56465</h2>
//       <div className="w-full min-w-0 h-60 overflow-hidden">
//         <ResponsiveContainer width="100%" height={240} className="border border-gray-300 h-full">
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="title" />
//             <YAxis unit="%" />
//             <Tooltip formatter={(value) => `${value}%`} />
//             <Legend />
//             <Bar dataKey="ctr" fill="#82ca9d">
//               <LabelList dataKey="ctr" position="top" formatter={(value) => `${value}%`} />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default BarChartSingle;




// without % symbol

// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   LabelList,
//   Legend,
//   Label,
// } from "recharts";

// const BarChartSingle = () => {
//   const data = [
//     { title: "IG", ctr: 4.5 },
//     { title: "FB", ctr: 6.2 },
//     { title: "LI", ctr: 5.8 },
//     { title: "YT", ctr: 5.8 },
//     { title: "PT", ctr: 6.8 },
//     { title: "Oth.", ctr: 5.8 },
//   ];

//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
//       <h2 className=" font-semibold mb-3">
//         <span className="text-gray-500 text-[10px] lg:text-lg">Social Impressions </span><span className=" text-xs lg:text-lg">552626</span>
//       </h2>

//       <div className="w-full min-w-0 h-45 overflow-hidden">
//         <ResponsiveContainer width="100%" height={180} className="border border-gray-200 h-full">
//           <BarChart data={data}>
//             {/* <CartesianGrid strokeDasharray="3 3" /> */}

//             <XAxis
//               dataKey="title"
//               interval={0}
//               tick={{ fontSize: 12,fill: "black"  }}
//             />

//             {/* <YAxis interval={0}
//               tick={{ fontSize: 12,fill: "black"  }}/> */}
//               <YAxis
//                             interval={0}
//                             tick={{ fontSize: 10, fill: "black" }}
//                           >
//                             <Label
//                               value="Impressions"
//                               angle={-90}
//                               position="insideLeft"
//                               offset={15}
//                               style={{
//                                 textAnchor: "middle",
//                                 fontSize: 16
//                               }}
//                             />
//                           </YAxis>
//             <Tooltip />
//             <Legend content={<CustomLegend />} />

//             <Bar dataKey="ctr" fill="#22c55e" name="Count">
//               <LabelList dataKey="ctr" position="top"
//                fontSize={12} fill="black" />
//             </Bar>

//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartSingle;




// const CustomLegend = () => {
//   return (

//       <div className="flex items-center text-xs justify-center gap-2">
//         <span className="w-3 h-3 bg-green-500 inline-block " />
//         <span>Count</span>
//       </div>

//   );
// };









// "use client";

// import { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList,
//   Legend,
//   Label,
// } from "recharts";

// const BarChartSingle = () => {
//   const [socialData, setSocialData] = useState([]);
//   const [impression,setImpression] = useState(null);


//   const nameShortMap = {
//     "Instagram": "IG",
//     "Linkedin": "LI",
//     "Facebook": "FB",
//     "Youtube": "YT",
//     "Pinterest": "PT",
//     "Others": "Oth."
//   };

//   const getSocialData = async () => {
//     try {
//       const result = await fetch("https://marketing-dashboard.integerstech.com/analyze/social/impressions/current-month");
//       const data = await result.json();

//       console.log("social data: ", data?.platforms);
//       if (Array.isArray(data?.platforms)) {
//         const sData = data?.platforms?.map((itm) => ({
//           title: nameShortMap[itm.platform_name] || itm.platform_name, // short name
//           total_impressions: itm.total_impressions,
//         }));

//         // console.log("sData---: ", sData);
//         setSocialData(sData || []);
//       }
//       setImpression(data?.total_impressions_all ?? null);
//     }
//     catch (err) {
//       console.log("something went wrong...");
//     }
//   };


//   useEffect(() => {
//     getSocialData();
//   }, []);

//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
//       <h2 className=" font-semibold mb-3">
//         <span className="text-gray-500 text-[10px] lg:text-lg">Social Impressions </span><span className=" text-xs lg:text-lg">{impression ?? "--"}</span>
//       </h2>

//       <div className="w-full min-w-0 h-45 overflow-hidden">
//         <ResponsiveContainer width="100%" height={180} className="border border-gray-200 h-full">
//           <BarChart data={socialData}>
//             {/* <CartesianGrid strokeDasharray="3 3" /> */}

//             <XAxis
//               dataKey="title"
//               interval={0}
//               tick={{ fontSize: 12, fill: "black" }}
//             />

//             {/* <YAxis interval={0}
//               tick={{ fontSize: 12,fill: "black"  }}/> */}
//             <YAxis
//               interval={0}
//               tick={{ fontSize: 10, fill: "black" }}
//             >
//               <Label
//                 value="Impressions"
//                 fill="black"
//                 angle={-90}
//                 position="insideLeft"
//                 offset={5}
//                 style={{
//                   textAnchor: "middle",
//                   fontSize: 14
//                 }}
//               />
//             </YAxis>
//             <Tooltip />
//             <Legend content={<CustomLegend />} />
// {/* 
//             <Bar dataKey="ctr" fill="#22c55e" name="Count">
//               <LabelList dataKey="total_impressions" position="top"
//                 fontSize={12} fill="black" />
//             </Bar> */}

//             <Bar dataKey="total_impressions" fill="#22c55e" name="Count">
//               <LabelList
//                 dataKey="total_impressions"
//                 position="top"
//                 fontSize={12}
//                 fill="black"
//               />
//             </Bar>

//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartSingle;




// const CustomLegend = () => {
//   return (

//     <div className="flex items-center text-xs justify-center gap-2">
//       <span className="w-3 h-3 bg-green-500 inline-block " />
//       <span>Count</span>
//     </div>

//   );
// };








"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
  Label,
} from "recharts";

/* Number Formatter */
const formatNumber = (value) => {
  if (value == null) return "";
  if (value >= 1000) {
    return `${Math.floor(value / 1000)}k`;
  }
  return value.toString();
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
      console.log("something went wrong...");
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
      <h2 className="font-semibold mb-3">
        <span className="text-gray-500 text-[10px] lg:text-lg">
          Social Impressions{" "}
        </span>
        <span className="text-xs lg:text-lg">
          {formatNumber(impression) ?? "--"}
        </span>
      </h2>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={socialData}>
          
          {/* X Axis */}
          <XAxis
            dataKey="title"
            interval={0}
            tick={{ fontSize: 12, fill: "black" }}
          />

          {/* Y Axis */}
          <YAxis
            interval={0}
            tick={{ fontSize: 10, fill: "black" }}
            tickFormatter={formatNumber}
          >
            <Label
              value="Impressions"
              fill="black"
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
              fill="black"
              formatter={formatNumber}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartSingle;

/* 🔹 Custom Legend */
const CustomLegend = () => (
  <div className="flex items-center text-xs justify-center gap-2">
    <span className="w-3 h-3 bg-green-500 inline-block" />
    <span>Count</span>
  </div>
);

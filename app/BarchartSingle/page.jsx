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

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";

const BarChartSingle = () => {
  const data = [
    { title: "Insta", ctr: 4.5 },
    { title: "Fb", ctr: 6.2 },
    { title: "Li", ctr: 5.8 },
    { title: "Yt", ctr: 5.8 },
    { title: "Others", ctr: 5.8 },
  ];

  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
      <h2 className="text-xs lg:text-lg font-semibold mb-3">
        Social impressions
      </h2>

      <div className="w-full min-w-0 h-45 overflow-hidden">
        <ResponsiveContainer width="100%" height={170} className="border border-gray-200 h-full">
          <BarChart data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            
            <XAxis
              dataKey="title"
              interval={0}
              tick={{ fontSize: 12,fill: "black"  }}
            />

            <YAxis interval={0}
              tick={{ fontSize: 12,fill: "black"  }}/>
            <Tooltip />
            <Legend content={<CustomLegend />} />

            <Bar dataKey="ctr" fill="#22c55e" name="Count">
              <LabelList dataKey="ctr" position="top"
               fontSize={12} fill="black" />
            </Bar>
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartSingle;




const CustomLegend = () => {
  return (

      <div className="flex items-center text-xs justify-center gap-2">
        <span className="w-3 h-3 bg-green-500 inline-block " />
        <span>Count</span>
      </div>
  
  );
};



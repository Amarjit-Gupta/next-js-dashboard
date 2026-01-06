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
    { title: "Instagram", ctr: 4.5 },
    { title: "Facebook", ctr: 6.2 },
    { title: "Linkdin", ctr: 5.8 },
    { title: "Youtube", ctr: 5.8 },
    { title: "Others", ctr: 5.8 },
  ];

  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
      <h2 className="text-lg font-semibold mb-3">
        Social impressions : 56465
      </h2>

      <div className="w-full min-w-0 h-60 overflow-hidden">
        <ResponsiveContainer width="100%" height={280} className="border border-gray-200 h-full">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis
              dataKey="title"
              interval={0}
              tick={{ fontSize: 16 }}
            />

            <YAxis tick={{ fontSize: 16 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 16 }} />

            <Bar dataKey="ctr" fill="#82ca9d" name="Count">
              <LabelList dataKey="ctr" position="top" />
            </Bar>
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartSingle;

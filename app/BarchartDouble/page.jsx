// import { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

// const BarChartDouble = () => {

//   const data = [
//     {
//       title: "promo1",
//       ctr: 4.5,
//       cvr: 2.1
//     },
//     {
//       title: "promo2",
//       ctr: 6.2,
//       cvr: 3.4
//     },
//     {
//       title: "promo3",
//       ctr: 5.8,
//       cvr: 2.9
//     },
//     {
//       title: "promo4",
//       ctr: 5.8,
//       cvr: 3.1
//     }
//   ];



//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
//       <h2 className="text-lg font-semibold mb-3">visitors web total</h2>
//       <div className="w-full min-w-0 h-60 overflow-hidden">
//         <ResponsiveContainer width="100%" height={240} className="border border-red-500 h-full">
//           <BarChart data={data} barCategoryGap="20%">
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="title" />
//             <YAxis unit="%" />
//             <Tooltip formatter={(value) => `${value}%`} />
//             <Legend />

//             {/* First bar */}
//             <Bar dataKey="ctr" fill="#3b82f6" name="CTR">
//               <LabelList dataKey="ctr" position="top" formatter={(v) => `${v}%`} />
//             </Bar>

//             {/* Second bar */}
//             <Bar dataKey="cvr" fill="#22c55e" name="CVR">
//               <LabelList dataKey="cvr" position="top" formatter={(v) => `${v}%`} />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartDouble;










// without % val
"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

const BarChartDouble = () => {
  const data = [
    { title: "website", ctr: 4.5, cvr: 2.1 },
    { title: "website", ctr: 6.2, cvr: 3.4 },
    { title: "website", ctr: 5.8, cvr: 2.9 },
    { title: "website", ctr: 5.8, cvr: 3.1 }
  ];

  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-3">visitors web total : 56845</h2>
      <div className="w-full min-w-0 h-60 overflow-hidden">
        <ResponsiveContainer width="100%" height={240} className="border border-gray-300 h-full">
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis /> {/* unit="%": remove kar diya */}
            
            <Tooltip /> {/* formatter hata diya */}
            <Legend />

            {/* First bar */}
            <Bar dataKey="ctr" fill="#3b82f6" name="CTR">
              <LabelList dataKey="ctr" position="top" /> {/* formatter hata diya */}
            </Bar>

            {/* Second bar */}
            <Bar dataKey="cvr" fill="#22c55e" name="CVR">
              <LabelList dataKey="cvr" position="top" /> {/* formatter hata diya */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartDouble;
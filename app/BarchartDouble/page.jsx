// import { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

// const BarChartDouble = () => {

//   const data = [
//     {
//       title: "prom1",
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










// // without % val
// "use client"
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

// const BarChartDouble = () => {
//   const data = [
//     { title: "Personal Care", ctr: 18, cvr: 26 },
//     { title: "Nutraceuticals", ctr: 20, cvr: 28 },
//     { title: "Pharmaceuticals", ctr: 22, cvr: 25 },
//     { title: "Engineering", ctr: 25, cvr: 32.8 }
//   ];

//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
//       <h2 className="text-lg font-semibold mb-3">visitors web total : 56845</h2>
//       <div className="w-full min-w-0 h-60 overflow-hidden">
//         <ResponsiveContainer width="100%" height={240} className="border border-gray-200 h-full">
//           <BarChart data={data} barCategoryGap="20%">
//             <CartesianGrid strokeDasharray="3 3" />
//             {/* <XAxis dataKey="title" /> */}
//             <XAxis
//               dataKey="title"

//               tick={{ fontSize: 12 }}


//             />
//             <YAxis /> {/* unit="%": remove kar diya */}

//             <Tooltip /> {/* formatter hata diya */}
//             <Legend />

//             {/* First bar */}
//             <Bar dataKey="ctr" fill="#3b82f6" name="Last month">
//               <LabelList dataKey="ctr" position="top" /> {/* formatter hata diya */}
//             </Bar>

//             {/* Second bar */}
//             <Bar dataKey="cvr" fill="#22c55e" name="Current month">
//               <LabelList dataKey="cvr" position="top" /> {/* formatter hata diya */}
//             </Bar>


//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartDouble;





"use client"
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
  Label
} from "recharts";

const BarChartDouble = () => {
  const data = [
    { title: "PC", ctr: 18, cvr: 26 },
    { title: "Nutra", ctr: 20, cvr: 28 },
    { title: "Pharma", ctr: 22, cvr: 25 },
    { title: "Engg.", ctr: 25, cvr: 32.8 },
    { title: "Encap", ctr: 18, cvr: 26 },
  ];

  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
     <h2 className=" font-semibold mb-3">
        <span className="text-gray-500 text-[10px] lg:text-lg">Web Impressions </span><span className=" text-xs lg:text-lg">552626</span>
      </h2>

      <div className="w-full min-w-0 h-45 overflow-hidden">
        <ResponsiveContainer width="100%" height={180} className="border border-gray-200 h-full">
          <BarChart data={data} barCategoryGap="20%">
            {/* <CartesianGrid strokeDasharray="3 3" /> */}

            {/* X Axis */}
            <XAxis
              dataKey="title"
              interval={0}
              tick={{ fontSize: 10, fill: "black" }}
            // angle={-22}         // labels ko -45 degree rotate karo
            // textAnchor="end"    // rotation ke saath alignment fix
            />

            {/* <YAxis interval={0}
              tick={{ fontSize: 10,fill: "black"  }}
              tickFormatter={(value)=>`count\u00A0${ value}`}
              /> */}

            <YAxis
              interval={0}
              tick={{ fontSize: 10, fill: "black" }}
            >
              <Label
                value="Impressions"
                angle={-90}
                position="insideLeft"
                offset={15}
                style={{
                  textAnchor: "middle",
                  fontSize: 16
                }}
              />
            </YAxis>

            <Tooltip />

            {/* Legend order fix */}
            <Legend
              content={<CustomLegend />}
            />

            {/* Last month */}
            <Bar dataKey="ctr" fill="#3b82f6" name="Last month">
              <LabelList dataKey="ctr" position="top" fontSize={12} fill="black" />
            </Bar>

            {/* Current month */}
            <Bar dataKey="cvr" fill="#22c55e" name="Current month">
              <LabelList dataKey="cvr" position="top" fontSize={12} fill="black" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartDouble;




const CustomLegend = () => {
  return (
    <div className="flex gap-4 text-xs justify-center">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-blue-500 inline-block " />
        <span>Last month</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 inline-block " />
        <span>Current month</span>
      </div>
    </div>
  );
};


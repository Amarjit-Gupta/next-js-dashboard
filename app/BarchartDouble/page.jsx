


// "use client"
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
//   Label
// } from "recharts";

// const BarChartDouble = () => {

//   const [socialData,setSocialData] = useState([]);

//   const getSocialData = async () => {
//     let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/active-users/umang-websites");
//     let data = await result.json();
//     let chartData = data?.websites;
//     if(Array.isArray(chartData)){
//       setSocialData(chartData);
//     }
//     // console.log(chartData);
//   }

//   useEffect(()=>{
//     getSocialData();
//   },[]);

//   console.log("socialData: ",socialData);


//   const data = [
//     { title: "PC", ctr: 18, cvr: 26 },
//     { title: "Nutra", ctr: 20, cvr: 28 },
//     { title: "Pharma", ctr: 22, cvr: 25 },
//     { title: "Engg.", ctr: 25, cvr: 32.8 },
//     { title: "Encap", ctr: 18, cvr: 26 },
//   ];

//   return (
//     <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
//      <h2 className=" font-semibold mb-3">
//         <span className="text-gray-500 text-[10px] lg:text-lg">Web Impressions </span><span className=" text-xs lg:text-lg">552626</span>
//       </h2>

//       <div className="w-full min-w-0 h-45 overflow-hidden">
//         <ResponsiveContainer width="100%" height={180} className="border border-gray-200 h-full">
//           <BarChart data={data} barCategoryGap="20%">
//             {/* <CartesianGrid strokeDasharray="3 3" /> */}

//             {/* X Axis */}
//             <XAxis
//               dataKey="title"
//               interval={0}
//               tick={{ fontSize: 10, fill: "black" }}
//             // angle={-22}         // labels ko -45 degree rotate karo
//             // textAnchor="end"    // rotation ke saath alignment fix
//             />

//             {/* <YAxis interval={0}
//               tick={{ fontSize: 10,fill: "black"  }}
//               tickFormatter={(value)=>`count\u00A0${ value}`}
//               /> */}

//             <YAxis
//               interval={0}
//               tick={{ fontSize: 10, fill: "black" }}
//             >
//               <Label
//                 value="Impressions"
//                 angle={-90}
//                 position="insideLeft"
//                 offset={15}
//                 style={{
//                   textAnchor: "middle",
//                   fontSize: 16
//                 }}
//               />
//             </YAxis>

//             <Tooltip />

//             {/* Legend order fix */}
//             <Legend
//               content={<CustomLegend />}
//             />

//             {/* Last month */}
//             <Bar dataKey="ctr" fill="#3b82f6" name="Last month">
//               <LabelList dataKey="ctr" position="top" fontSize={12} fill="black" />
//             </Bar>

//             {/* Current month */}
//             <Bar dataKey="cvr" fill="#22c55e" name="Current month">
//               <LabelList dataKey="cvr" position="top" fontSize={12} fill="black" />
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarChartDouble;




// const CustomLegend = () => {
//   return (
//     <div className="flex gap-4 text-xs justify-center">
//       <div className="flex items-center gap-2">
//         <span className="w-3 h-3 bg-blue-500 inline-block " />
//         <span>Last month</span>
//       </div>

//       <div className="flex items-center gap-2">
//         <span className="w-3 h-3 bg-green-500 inline-block " />
//         <span>Current month</span>
//       </div>
//     </div>
//   );
// };











"use client"
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
  Label
} from "recharts";

const BarChartDouble = () => {

  const nameShortMap = {
    "Umang Encapsulation": "Encap",
    "Umang Engineering": "Engg.",
    "Umang Global": "UG",
    "Umang Nutraceuticals": "Nutra",
    "Umang Particle Science": "PC",
    "Umang Pharmaceuticals": "Pharma"
  };



  const [socialData, setSocialData] = useState([]);

  const getSocialData = async () => {
    const result = await fetch(
      "https://marketing-dashboard.integerstech.com/analyze/active-users/umang-websites"
    );
    const data = await result.json();

    // API data ko chart format me convert karna
    // const chartData = data?.websites?.map((item) => ({
    //   title: item.name,                         // X-axis
    //   lastMonth: item.active_users_yesterday,   // Blue bar
    //   currentMonth: item.active_users_today     // Green bar
    // }));

    const chartData = data?.websites
      ?.filter(
        (item) => item.id !== "08458e02-892f-40e9-897b-21e750a5d499"
      )
      .map((itm) => ({
        title: nameShortMap[itm.name] || itm.name, // 👈 short name
        lastMonth: itm.active_users_yesterday,
        currentMonth: itm.active_users_today
      }));

    setSocialData(chartData || []);
  };

  useEffect(() => {
    getSocialData();
  }, []);


  // console.log("social: ",socialData);



  return (
    <div className="bg-white p-3 rounded-xl border w-full min-w-0 flex flex-col border-gray-200">
      <h2 className="font-semibold mb-3">
        <span className="text-gray-500 text-[10px] lg:text-lg">
          Active Users
        </span>
      </h2>

      <div className="w-full min-w-0 h-45 overflow-hidden">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={socialData} barCategoryGap="20%">
            {/* X Axis */}
            <XAxis
              dataKey="title"
              interval={0}
              tick={{ fontSize: 10, fill: "black" }}
            />

            {/* Y Axis */}
            <YAxis tick={{ fontSize: 10, fill: "black" }}>
              <Label
                value="Impressions"
                angle={-90}
                position="insideLeft"
                offset={15}
                style={{ textAnchor: "middle", fontSize: 14 }}
              />
            </YAxis>

            <Tooltip />
            <Legend content={<CustomLegend />} />

            {/* Last month */}
            <Bar dataKey="lastMonth" fill="#3b82f6" name="Last month">
              <LabelList dataKey="lastMonth" position="top" fontSize={10} />
            </Bar>

            {/* Current month */}
            <Bar dataKey="currentMonth" fill="#22c55e" name="Current month">
              <LabelList dataKey="currentMonth"  position="top" fontSize={10} />
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
        <span className="w-3 h-3 bg-blue-500 inline-block" />
        <span>Last month</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-green-500 inline-block" />
        <span>Current month</span>
      </div>
    </div>
  );
};

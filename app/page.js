// import BarChartDouble from "./BarchartDouble/page";
// import BarChartSingle from "./BarchartSingle/page";
// import CarouselComponent from "./Crousel/page";
// import DateTime from "./DateComponent/page";
// import Emailer from "./Emailer/page";
// import KPI from "./KPI/page";
// import TodaysCreative from "./TodaysCreative/page";
// import Total from "./Total/page";


// const App = () => {
//   return (
//     // <div className="h-screen  bg-gray-100 grid grid-rows-[0.5fr_4fr_2fr_3.5fr] gap-4 p-4">
//     <div className="min-h-screen bg-gray-100 grid grid-rows-[auto_1fr_auto_auto] gap-4 p-4 overflow-hidden">


//       <div className="border flex items-center">
//         <DateTime/>
//       </div>

//       <div className="grid grid-cols-3 gap-6">

//         <div className="border">
//           <BarChartDouble />
//         </div>
//         <div className="border">
//           <BarChartSingle />
//         </div>
//         <div className="border">
//           <Total />
//         </div>
//       </div>

//       <div className="grid grid-cols-5 gap-6 items-stretch">

//         <div className=" border h-full">
//           <KPI txt1="Total Leads" txt2="Last month same period" val1={20} val2={20} />
//         </div>

//         <div className="border h-full">
//           <KPI txt1="Best Company" val1="xyz" />
//         </div>

//         <div className="border h-full">
//           <KPI txt1="Best Product" val1="xyz" />
//         </div>

//         <div className="border h-full">
//           <KPI txt1="Revenue" val1={20} />
//         </div>

//         <div className="h-full border p-3 flex justify-between bg-white">
//           <div className="border flex flex-col justify-around ">
//             <div className="border p-1 rounded-full h-9 w-9 ">p</div>
//             <div className="border text-xl font-medium">999</div>
//           </div>
//           <div className="border flex flex-col justify-around ">
//             <div className="border p-1 rounded-full h-9 w-9">g</div>
//             <div className="border text-xl font-medium">999</div>
//           </div>
//           <div className="border flex flex-col justify-around ">
//             <div className="border p-1 rounded-full h-9 w-9">b</div>
//             <div className="border text-xl font-medium">999</div>
//           </div>
//           <div className="border flex flex-col justify-around ">
//             <div className="border p-1 rounded-full h-9 w-9">n</div>
//             <div className="border text-xl font-medium">999</div>
//           </div>
//           <div className="border flex flex-col justify-around ">
//             <div className="border p-1 rounded-full h-9 w-9">y</div>
//             <div className="border text-xl font-medium">999</div>
//           </div>
//         </div>

//       </div>


//       <div className="grid grid-cols-3 gap-6">
//         <div className="border p-3"><TodaysCreative /></div>

//         <div className="border p-3 flex flex-col">

//           <h2 className="text-xl font-bold h-10 border">
//             Heading News
//           </h2>

//           <div className="grid grid-cols-2 gap-5 h-44">
//             <div className="border">
//               <CarouselComponent />
//             </div>
//             <div className="border p-1">
//               <h3 className="border font-bold text-gray-500 py-0.5">Trending Hashtag</h3>
//               <ul className="list-disc pl-7">
//                 <li>hello</li>
//                 <li>hello</li>
//                 <li>hello</li>
//                 <li>hello</li>
//                 <li>hello</li>
//                 <li>hello</li>
//                 <li>hello</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="border">
//           <Emailer />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default App;

"use client"
import { useEffect, useState } from "react";
import BarChartDouble from "./BarchartDouble/page";
import BarChartSingle from "./BarchartSingle/page";
import CarouselComponent from "./Crousel/page";
import DateTime from "./DateComponent/page";
import Emailer from "./Emailer/page";
import KPI from "./KPI/page";
import TodaysCreative from "./TodaysCreative/page";
import Total from "./Total/page";

const App = () => {

   const [quotes,setQuotes] = useState(null);

  const getQuotes = async () => {
    let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/quote/today");
    let data = await result.json();
    console.log(data?.quote);
    setQuotes(data?.quote);
  }


  useEffect(()=>{
    getQuotes();
  },[]);

  // console.log("quotes: ",quote);


  return (
    // <div className="h-screen bg-gray-100 p-1 lg:p-3 grid grid-rows-[0.2fr_1fr_0.5fr_1.2fr] gap-4">
    <div className="h-screen bg-gray-100 p-1 lg:p-3 grid grid-rows-[0.2fr_0.7fr_0.3fr_1.2fr] gap-1 overflow-hidden">
    {/* // <div className="bg-gray-100 p-3 m-auto flex flex-col gap-2"> */}
      {/* HEADER */}
      <div className=" bg-white rounded-xl flex items-center border border-gray-200">
        <DateTime />
      </div>

      {/* ROW 1 : Charts */}
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="h-full"><BarChartDouble /></div>
        <div className="h-full"><BarChartSingle /></div>
        <div className="h-full border bg-white rounded-xl border-gray-200">
          <div className="h-[34%] border p-2 text-xl font-bold gradient-text">
            {quotes}
          </div>
          <div className="h-[66%] border"><Total/></div>
          
          </div>
      </div>

      {/* ROW 2 : KPI */}
      <div className="grid grid-cols-5 gap-4 h-full">
        <KPI txt1="Total Leads" txt2="Last month" val1={20} val2={20} />
        <KPI txt1="Best Company" val1="xyz" />
        <KPI txt1="Best Product" val1="xyz" />
        <KPI txt1="Revenue Generated" val1={20} />

        <div className="h-full p-1 lg:p-3 flex justify-between bg-white rounded-xl border border-gray-200">
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#ff6caf]"></div>
            <div className="text-[10px] lg:text-xl font-medium">999</div>
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#04c56b]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium">999</div>
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#00b6cc]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium">999</div>
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#4b7bf5]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium">999</div>
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#ffcc00]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium">999</div>
          </div>
        </div>
      </div>

      {/* ROW 3 : Bottom Section */}
      <div className="grid grid-cols-3 gap-4 flex-1 overflow-hidden">

        {/* TodaysCreative */}
        <div className=" p-3 flex flex-col h-full overflow-hidden bg-white rounded-xl border border-gray-200">
          <TodaysCreative />
        </div>

        {/* Heading News + Carousel + Hashtags */}
        <div className=" p-3 flex flex-col h-full overflow-hidden bg-white rounded-xl  border border-gray-200">
          <h2 className="font-medium text-xs lg:text-lg mb-2">Todays Trending</h2>

          <div className="flex-1 flex gap-3 overflow-hidden">
            {/* Carousel */}
            <div className="flex-1 overflow-hidden">
              <CarouselComponent />
            </div>

            {/* Trending Hashtags */}
            <div className="flex-1 p-1 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-500 py-0.5 text-center">Hashtags</h3>
              <ul className="list-disc pl-5 text-xs lg:text-xl">
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>
                  Lorem ipsum dolor
                </li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emailer */}
        <div className="h-full overflow-hidden p-3 bg-white rounded-xl border border-gray-200">
          <Emailer />
        </div>

      </div>


    </div>
  );
};

export default App;

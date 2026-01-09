"use client"
import BarChartDouble from "./BarchartDouble/page";
import BarChartSingle from "./BarchartSingle/page";
import CarouselComponent from "./Crousel/page";
import DateTime from "./DateComponent/page";
import Emailer from "./Emailer/page";
import KPI from "./KPI/page";
import TodaysCreative from "./TodaysCreative/page";
import Quotes from "./Quotes/page";
import BounceRate from "./BounceRate/page";
import HashTag from "./HashTag/page";
import PaidAds from "./PaidAds/page";

const App = () => {

  return (
    <div className="h-screen bg-gray-100 p-1 lg:p-3 grid grid-rows-[0.2fr_0.7fr_0.3fr_1.2fr] gap-1 overflow-hidden">


      {/* current date and time */}
      <div className=" bg-white rounded-xl flex items-center border border-gray-200">
        <DateTime />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4 h-full">

        {/* double chart */}
        <div className="h-full"><BarChartDouble /></div>

        {/* single chart */}
        <div className="h-full"><BarChartSingle /></div>

        <div className="h-full border bg-white rounded-xl border-gray-200">

          {/* quotes */}
          <Quotes />

          {/* total */}
          <div className="h-[66%]">
            <BounceRate />
          </div>
        </div>
      </div>

      {/* KPI */}
      <KPI />



      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-4 flex-1 overflow-hidden">

        {/* TodaysCreative */}
        <div className=" p-3 flex flex-col h-full overflow-hidden bg-white rounded-xl border border-gray-200">
          <TodaysCreative />
        </div>

        {/* Heading News */}
        <div className=" p-3 flex flex-col h-full overflow-hidden bg-white rounded-xl  border border-gray-200">

          <h2 className="font-medium text-xs lg:text-lg mb-2">Todays Trending</h2>
          <div className="flex-1 flex gap-3 overflow-hidden">

            {/* Carousel */}
            <div className="flex-1 overflow-hidden">
              <CarouselComponent />
            </div>

            {/* Trending Hashtags */}
            <HashTag />

          </div>
        </div>

        {/* Emailer */}
        <div className="h-full overflow-hidden p-3 bg-white rounded-xl border border-gray-200">
          <div className="grid grid-cols-2 gap-3 h-full">
            <Emailer />
            <PaidAds />
          </div>
        </div>

      </div>


    </div>
  );
};

export default App;

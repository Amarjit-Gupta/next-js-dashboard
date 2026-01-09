"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const BounceRate = () => {

  const [bounceRate, setBounceRate] = useState(null);
  const [lbounceRate, setLbounceRate] = useState(null);
  const [engTime, setEngTime] = useState(null);
  const [lengTime, setLengTime] = useState(null);
  const [clicks, setClicks] = useState(null);
  const [lclicks, setLclicks] = useState(null);

  const getBECData = async () => {
    try {
      let [bounceRateRes, lbounceRateRes, engTimeRes, lengTimeRes, clicksRes, lclicksRes] = await Promise.allSettled([
        fetch("https://marketing-dashboard.integerstech.com/analyze/bounce-rate/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/bounce-rate/previous-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/engagement-time/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/engagement-time/previous-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/clicks/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/clicks/previous-month"),
      ]);

      // 1
      if (bounceRateRes.status === "fulfilled") {
        const bounceRateData = await bounceRateRes.value.json();
        // console.log("bounceRateData", bounceRateData);
        setBounceRate(bounceRateData?.avg_bounce_rate_pct ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 2
      if (lbounceRateRes.status === "fulfilled") {
        const lbounceRateData = await lbounceRateRes.value.json();
        // console.log("lbounceRateData", lbounceRateData);
        setLbounceRate(lbounceRateData?.avg_bounce_rate_pct ?? null);
      }
      else {
        console.log("lbounceRate api failed...");
      }

      // 3
      if (engTimeRes.status === "fulfilled") {
        const engTimeData = await engTimeRes.value.json();
        // console.log("engTimeData", engTimeData);
        setEngTime(engTimeData?.avg_engagement_time_formatted ?? null);
      }
      else {
        console.log("engTime api failed...");
      }

      // 4
      if (lengTimeRes.status === "fulfilled") {
        const lengTimeData = await lengTimeRes.value.json();
        // console.log("lengTimeData", lengTimeData);
        setLengTime(lengTimeData?.avg_engagement_time_formatted ?? null);
      }
      else {
        console.log("lengTime api failed...");
      }

      // 5
      if (clicksRes.status === "fulfilled") {
        const clicksData = await clicksRes.value.json();
        // console.log("clicksData", clicksData);
        setClicks(clicksData?.total_clicks ?? null);
      }
      else {
        console.log("clicks api failed...");
      }

      // 6
      if (lclicksRes.status === "fulfilled") {
        const lclicksData = await lclicksRes.value.json();
        // console.log("lclicksData", lclicksData);
        setLclicks(lclicksData?.total_clicks ?? null);
      }
      else {
        console.log("lclicks api failed...");
      }
    }
    catch (err) {
      console.log("something went wrong...");
    }
  }

  useEffect(() => {
    getBECData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 px-3">
      <CardData title1="Bounce rate" title2="Last month" value1={bounceRate !== null ? `${bounceRate}%` : "--"} value2={lbounceRate !== null ? `${lbounceRate}%` : "--"} icon="/frame-1.svg" />
      <CardData title1="Eng. time" title2="Last month" value1={engTime ?? "--"} value2={lengTime ?? "--"} icon="/frame-2.svg" />
      <CardData title1="Clicks" title2="Last month" value1={clicks ?? "--"} value2={lclicks ?? "--"} icon="/frame-3.svg" />
    </div>
  );
};

export default BounceRate;


const CardData = ({ title1, title2, value1, value2, icon }) => {

  return (
    <div className="dark-card shadow-xs rounded-lg p-2 flex flex-col justify-around items-center">
      {/* Icon */}
      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center relative">
        <Image
          src={icon}
          alt="icon"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 640px) 40px, 40px"
          priority
        />
      </div>

      {/* First metric */}
      <div className="text-center">
        <p className="text-gray-300 font-medium text-xs lg:text-sm">{title1}</p>
        <p className="text-xs font-medium lg:font-bold lg:text-sm">{value1}</p>
      </div>

      {/* Second metric */}
      <div className="text-center">
        <p className="text-gray-300 font-medium text-xs lg:text-sm">{title2}</p>
        <p className="text-xs font-medium lg:font-bold lg:text-sm">{value2}</p>
      </div>
    </div>
  );
};

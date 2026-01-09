"use client"
import { useEffect, useState } from "react";


const Emailer = () => {

    const [emailerData,setEmailerData] = useState(null);

    const getEmailerData = async () => {
        try {
            let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/emailer/performance/current-month");
            let eData = await result.json();
            // console.log("Emailer data: ",eData);
            setEmailerData(eData ?? null);
        }
        catch (err) {
            console.log("something went wrong...");
        }
    }

    useEffect(() => {
        getEmailerData();
    }, []);

    // console.log("Emailer data-----: ",emailerData);

    return (

        <div className="flex flex-col h-full">

            <h1 className="font-medium text-xs lg:text-lg mb-2">
                Emailer
            </h1>

            <div className=" flex-1 grid grid-cols-2 gap-2">
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Total Send</p>
                    <p className="text-xs lg:text-xl">{emailerData?.total_sends ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Click Rate</p>
                    <p className="text-xs lg:text-xl">{emailerData?.avg_click_rate_pct ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Open Rate</p>
                    <p className="text-xs lg:text-xl">{emailerData?.avg_open_rate_pct ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[7px] lg:text-sm wrap-break-word">Subscribers</p>
                    <p className="text-xs lg:text-xl">{emailerData?.total_subscribers ?? "--"}</p>
                </div>
            </div>
        </div>



    );
};

export default Emailer;



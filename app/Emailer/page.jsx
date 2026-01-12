"use client"
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { backend_url } from "../URL";

const Emailer = () => {

    const [emailerData, setEmailerData] = useState(null);

    const getEmailerData = async () => {
        try {
            let result = await fetch(`${backend_url}/analyze/emailer/performance/current-month`);
            let eData = await result.json();
            // console.log("Emailer data: ",eData);
            setEmailerData(eData ?? null);
        }
        catch (err) {
            // console.log("something went wrong...");
            toast.error('something went wrong...',{duration:3000,position:"bottom-right"});
        }
    }

    useEffect(() => {
        getEmailerData();
    }, []);

    // console.log("emailerData: ",emailerData);

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
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Total Unique Opens</p>
                    <p className="text-xs lg:text-xl">{emailerData?.total_unique_opens ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Open Rate</p>
                    <p className="text-xs lg:text-xl">{emailerData?.avg_open_rate_pct ?? "--"} %</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[7px] lg:text-sm wrap-break-word">Total Unique Clicks</p>
                    <p className="text-xs lg:text-xl">{emailerData?.total_unique_clicks ?? "--"}</p>
                </div>
            </div>
        </div>
    );
};

export default Emailer;

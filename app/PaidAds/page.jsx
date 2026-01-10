"use client"
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
const PaidAds = () => {

    const [keyword, setKeyword] = useState(null);
    const [campaign, setCampaign] = useState(null);
    const [adSpent, setAdSpent] = useState(null);
    const [competitor, setCompetitor] = useState(null);

    const getKPIData = async () => {
        try {
            let [keywordRes, campaignRes, adSpentRes, competitorRes] = await Promise.allSettled([
                fetch("https://marketing-dashboard.integerstech.com/analyze/keyword/today"),
                fetch("https://marketing-dashboard.integerstech.com/analyze/campaign/today"),
                fetch("https://marketing-dashboard.integerstech.com/analyze/ad-spend/current-month"),
                fetch("https://marketing-dashboard.integerstech.com/analyze/competitor/today")
            ]);

            // 1
            if (keywordRes.status === "fulfilled") {
                const keywordData = await keywordRes.value.json();
               // console.log("keywordData", keywordData);
                setKeyword(keywordData ?? null);
            }
            else {
                // console.log("keyword api failed...");
                toast.error('keyword api failed...',{duration:3000,position:"bottom-right"});
            }

            // 2
            if (campaignRes.status === "fulfilled") {
                const campaignData = await campaignRes.value.json();
               // console.log("campaignData", campaignData);
                setCampaign(campaignData ?? null);
            }
            else {
                // console.log("campaign api failed...");
                toast.error('campaign api failed...',{duration:3000,position:"bottom-right"});
            }

            // 3
            if (adSpentRes.status === "fulfilled") {
                const adSpentData = await adSpentRes.value.json();
               // console.log("adSpentData", adSpentData);
                setAdSpent(adSpentData?.total_ad_spend_rupees ?? null);
            }
            else {
                // console.log("adSpent api failed...");
                toast.error('adSpent api failed...',{duration:3000,position:"bottom-right"});
            }

            // 4
            if (competitorRes.status === "fulfilled") {
                const competitorData = await competitorRes.value.json();
               // console.log("competitorData", competitorData);
                setCompetitor(competitorData ?? null);
            }
            else {
                // console.log("competitor api failed...");
                toast.error('competitor api failed...',{duration:3000,position:"bottom-right"});
            }
        }
        catch (err) {
            // console.log("something went wrong...");
            toast.error('something went wrong...',{duration:3000,position:"bottom-right"});
        }
    }

    useEffect(() => {
        getKPIData();
    }, []);


    return (
        <div className="flex flex-col h-full">
            <h1 className="font-medium text-xs lg:text-lg mb-2">Paid Ads</h1>
            <div className="flex-1 grid grid-cols-2 gap-2">
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Keyword</p>
                    <p className="text-[6px] lg:text-sm">{keyword ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm wrap-break-word">Campaign</p>
                    <p className="text-[8px] lg:text-sm">{campaign ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[8px] lg:text-sm">Ad Spent</p>
                    <p className="text-xs lg:text-xl">{adSpent ?? "--"}</p>
                </div>
                <div className=" flex flex-col justify-center px-1 dark-card rounded-lg">
                    <p className="text-gray-300 text-[7px] lg:text-sm wrap-break-word">Competitor</p>
                    <p className="text-[6px] lg:text-lg">{competitor ?? "--"}</p>
                </div>
            </div>
        </div>
    );
};
export default PaidAds;

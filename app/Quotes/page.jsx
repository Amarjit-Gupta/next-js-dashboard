"use client"
import { useEffect, useState } from "react";

const Quotes = () => {

    const [quotes, setQuotes] = useState(null);

    const getQuotes = async () => {
        try {
            let result = await fetch("https://marketing-dashboard.integerstech.com/analyze/quote/today");
            let data = await result.json();
            console.log("quote: ",data?.quote);
            setQuotes(data?.quote);
        }
        catch (err) {
            console.log("something went wrong...");
        }
    }

    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <div className="h-[34%] border p-3 text-[16px] font-bold gradient-text">
            {quotes || ""}
        </div>
    );
};
export default Quotes;
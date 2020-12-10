// "use client";
// import { useEffect, useState } from "react";

// const DateTime = () => {
//   const [dateTime, setDateTime] = useState(null);

//   useEffect(() => {
//     const updateTime = () => setDateTime(new Date());

//     updateTime(); // first client render
//     const interval = setInterval(updateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   if (!dateTime) return null; // ⛔ SSR mismatch prevent

//   return (
//     <div className="flex justify-end w-full gap-4 font-bold text-xl">
//       <h2>
//         Date:{" "}
//         {dateTime.toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "2-digit",
//           year: "numeric",
//         })}
//       </h2>

//       <h2>
//         Time:{" "}
//         {dateTime.toLocaleTimeString("en-IN", {
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         })}
//       </h2>
//     </div>
//   );
// };

// export default DateTime;







"use client";

import { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");  // Display string
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let serverTime = 0;
    let tickInterval;
    let syncInterval;

    // Function to fetch server time
    const fetchServerTime = async () => {
      try {
        const res = await fetch("/api/currentDate", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch server time");
        const data = await res.json();

        serverTime = data.timestamp;

        // Update display immediately
        setTime(
          new Date(serverTime).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          })
        );
        setLoading(false);
        setError("");
      } catch (err) {
        console.error("Time fetch error:", err);
        setError("Could not fetch server time");
        setLoading(false);
      }
    };

    // Initial fetch
    fetchServerTime();

    // Tick every second
    tickInterval = setInterval(() => {
      if (serverTime) {
        serverTime += 1000; // increment 1 second
        setTime(
          // new Date(serverTime).toLocaleString("en-IN", {
          //   timeZone: "Asia/Kolkata",
          // })
          new Date(serverTime).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
          })
        );
      }
    }, 1000);

    // Auto-sync with server every 5 minutes (300000 ms)
    syncInterval = setInterval(() => {
      fetchServerTime();
    }, 300000);

    // Cleanup on component unmount
    return () => {
      clearInterval(tickInterval);
      clearInterval(syncInterval);
    };
  }, []);

  if (loading) return <p>Loading current time...</p>;
  if (error) return <p>{error}</p>;

  console.log("time: ", time);



  return (
    <div>
      <h2>Current IST Time:</h2>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;

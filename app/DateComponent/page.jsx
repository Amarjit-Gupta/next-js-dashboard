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
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Common formatter (SINGLE SOURCE OF TRUTH)
  const formatIST = (timestamp) =>
    new Date(timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  useEffect(() => {
    let serverTime = 0;
    let tickInterval;
    let syncInterval;

    const fetchServerTime = async () => {
      try {
        const res = await fetch("/api/currentDate", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch server time");

        const data = await res.json();
        serverTime = data.timestamp;

        // Same formatter used here
        setTime(formatIST(serverTime));
        setLoading(false);
        setError("");
      } catch (err) {
        console.error("Time fetch error:", err);
        setError("Could not fetch server time");
        setLoading(false);
      }
    };

    fetchServerTime();

    tickInterval = setInterval(() => {
      if (serverTime) {
        serverTime += 1000;
        // Same formatter used here
        setTime(formatIST(serverTime));
      }
    }, 1000);

    syncInterval = setInterval(fetchServerTime, 300000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(syncInterval);
    };
  }, []);

  if (loading) return <p>Loading current time...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex justify-end w-full font-bold text-xl px-3">
      <h2>{time}</h2>
    </div>
  );
};

export default DateTime;
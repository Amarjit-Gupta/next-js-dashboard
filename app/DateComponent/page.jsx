"use client";

import { useEffect, useState, useRef } from "react";

const DateTime = () => {
  
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const serverTimeRef = useRef(0);
  const clientStartRef = useRef(0);

  const formatDateIST = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const formatTimeIST = (timestamp) =>
    new Date(timestamp)
      .toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .toUpperCase();

  useEffect(() => {
    let tickInterval;
    let syncInterval;

    const fetchServerTime = async () => {
      try {
        const res = await fetch("/api/currentDate", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch server time");

        const data = await res.json();

        serverTimeRef.current = data.timestamp;
        clientStartRef.current = Date.now();

        setDate(formatDateIST(data.timestamp));
        setTime(formatTimeIST(data.timestamp));
        setLoading(false);
        setError("");
      } catch (err) {
       // console.error(err);
        setError("Could not fetch server time");
        setLoading(false);
      }
    };

    fetchServerTime();

    tickInterval = setInterval(() => {
      if (!serverTimeRef.current) return;

      const now = Date.now();
      const elapsed = now - clientStartRef.current;
      const currentTime = serverTimeRef.current + elapsed;

      setDate(formatDateIST(currentTime));
      setTime(formatTimeIST(currentTime));
    }, 1000);

    // Re-sync every 5 minutes
    syncInterval = setInterval(fetchServerTime, 300000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(syncInterval);
    };
  }, []);

  if (loading) return <p className="w-full text-right px-3">Loading current time...</p>;
  if (error) return <p className="w-full text-right px-3">{error}</p>;

  return (
    <div className=" flex justify-between w-full px-3">
      <div className=" font-bold text-sm lg:text-lg">
        Current Month Performance
      </div>
      <div className="flex font-bold text-sm lg:text-lg gap-6">
        <span>Date: {date}</span>
        <span>Time: {time}</span>
      </div>
    </div>
  );
};

export default DateTime;

"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export const Clock: React.FC = () => {
  const getTimeString = (timeZone: string) => {
    return new Date().toLocaleTimeString(undefined, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [currentTime, setCurrentTime] = useState({
    amsterdam: getTimeString("Europe/Amsterdam"),
    newyork: getTimeString("America/New_York"),
    tokyo: getTimeString("Asia/Tokyo"),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime({
        amsterdam: getTimeString("Europe/Amsterdam"),
        newyork: getTimeString("America/New_York"),
        tokyo: getTimeString("Asia/Tokyo"),
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full py-12">
      <div className="flex w-full justify-between text-[clamp(2rem,4vw,3.6rem)] text-slate-400">
        <span className="">Charleroi</span>
        <span>{currentTime.amsterdam}</span>
      </div>
      <div className="flex w-full justify-between text-[clamp(2rem,4vw,3.6rem)] text-slate-400">
        <span className="">New York</span>
        <span>{currentTime.newyork}</span>
      </div>
      <div className="flex w-full justify-between text-[clamp(2rem,4vw,3.6rem)] text-slate-400">
        <span className="">富 士 山</span>
        <span>{currentTime.tokyo}</span>
      </div>
    </div>
  );
};

// Disable server side rendering to avoid hydration error on time
export const DynamicClock = dynamic(() => Promise.resolve(Clock), {
  ssr: false,
});

"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <span>{currentTime.toLocaleTimeString("fr-FR")}</span>;
};

// Disable server side rendering to avoid hydration error on time
export const DynamicClock = dynamic(() => Promise.resolve(Clock), {
  ssr: false,
});

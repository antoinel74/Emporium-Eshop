"use client";
import { useEffect } from "react";
import { Gradient } from "../libs/gradient";

export const Canvas = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return <canvas id="gradient-canvas" data-transition-in />;
};

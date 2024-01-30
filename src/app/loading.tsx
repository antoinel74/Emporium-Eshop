import React from "react";

export default function Loading() {
  return (
    <div className="absolute min-h-screen w-screen bg-white flex items-center justify-center z-5000">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-200 animate-spin"></div>
    </div>
  );
}

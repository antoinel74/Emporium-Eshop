import React from "react";

export default function Loading() {
  return (
    <div className="z-5000 fixed absolute flex min-h-screen w-screen items-center justify-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-md border-4 border-t-4 border-blue-200"></div>
    </div>
  );
}

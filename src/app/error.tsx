"use client";
import React from "react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="font-2xl">Oops .. something has gone wrong !</h2>
      <Link href="/" className="link-hover p-2 px-4">
        Back to homepage
      </Link>
    </div>
  );
}

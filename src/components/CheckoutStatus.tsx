"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface StepProps {
  stepNumber: number;
  title: string;
  active: boolean;
  completed: boolean;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  title,
  active,
  completed,
}) => {
  return (
    <p
      className={`flex items-center gap-2 border-b-4 pb-6 pr-12 font-semibold ${active || completed ? "border-[#00a27d] text-[#00a27d]" : "border-black"}`}>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full ${active || completed ? "bg-[#00a27d]" : "bg-black"} text-white`}>
        {stepNumber}
      </span>
      {title}
    </p>
  );
};

export const CheckoutStatus: React.FC = () => {
  const pathname = usePathname();
  const isProcessing = pathname === "/checkout-form";
  const isSuccess = pathname === "/success";
  const isCancel = pathname === "/cancel";

  return (
    <div
      className={`mt-12 hidden justify-center gap-8 py-2 text-sm md:flex ${isCancel ? "opacity-50" : ""}`}>
      <Step
        stepNumber={1}
        title="Shopping cart"
        active={isProcessing || isSuccess}
        completed={isSuccess}
      />
      <Step
        stepNumber={2}
        title="Checkout details"
        active={isSuccess}
        completed={isSuccess}
      />
      <Step
        stepNumber={3}
        title="Order complete"
        active={isSuccess}
        completed={isSuccess}
      />
    </div>
  );
};

export default CheckoutStatus;

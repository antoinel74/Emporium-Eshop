import React from "react";

interface Props {
  title: string;
}
export const MainTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="w-2/3 px-4 py-12 text-[clamp(1.875rem,4vw,3.75rem)] leading-none md:px-14">
      {title}
    </h1>
  );
};

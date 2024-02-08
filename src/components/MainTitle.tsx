import React from "react";

interface Props {
  title: string;
}
export const MainTitle: React.FC<Props> = ({ title }) => {
  return <h1 className="py-12 px-4 md:px-14 text-[clamp(1.875rem,4vw,3.75rem)] leading-none w-2/3">{title}</h1>;
};

import React from "react";

type Props = {
  handleClose: () => void;
};

export const MobileMenu: React.FC<Props> = ({ handleClose }) => {
  return (
    <div className="min-h-screen fixed top-0 left-0 z-[400] w-screen bg-red-200">
      MobileMenu
      <button onClick={handleClose}>X</button>
    </div>
  );
};

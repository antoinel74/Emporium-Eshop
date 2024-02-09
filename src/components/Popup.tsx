import React from "react";

interface Props {
  onClose: () => void;
}
export const PopUp: React.FC<Props> = ({ onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md text-center">
        <p className="mb-2">This feature is currently under development.</p>
        <button onClick={onClose} className="bg-gray-300 px-3 py-1 rounded-md hover:opacity-75">
          Close
        </button>
      </div>
    </div>
  );
};

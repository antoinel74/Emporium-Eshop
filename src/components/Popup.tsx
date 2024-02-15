import React from "react";

interface Props {
  onClose: () => void;
}
export const PopUp: React.FC<Props> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-md bg-white p-4 text-center">
        <p className="mb-2">This feature is currently under development.</p>
        <button
          onClick={onClose}
          className="rounded-md bg-gray-300 px-3 py-1 hover:opacity-75">
          Close
        </button>
      </div>
    </div>
  );
};

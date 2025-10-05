import React, { useEffect, useState } from "react";
import { Button } from "./Button";

interface OtherFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OtherFieldModal: React.FC<OtherFieldModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#070707] text-white p-6 rounded-[16px] border border-[#1b1b1b] shadow-2xl w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white font-onest text-[16px] font-normal">
            Enter the name of the field
          </h1>
          <button onClick={onClose} className="text-white">
            ✕
          </button>
        </div>

        <form className="flex flex-col w-full gap-5">
          <input
            type="text"
            id="name"
            placeholder="Enter field name"
            className="w-full p-3 border text-[#FFF3EF]  font-onest border-[#1b1b1b] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-primary placeholder:font-onest "
          />
          <div className="">
            {" "}
            <Button
              variant="normal"
              size="normal"
              className="border-none font-onest font-medium text-[14px] py-4 w-full"
              type="submit"
            >
              Add Field
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtherFieldModal;

import React, { useEffect, useState } from "react";
import OtherFieldModal from "./ui/OtherFiledModal";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            Select the field you want to add
          </h1>
          <button onClick={onClose} className="text-white">
            ✕
          </button>
        </div>

        <div
          className="flex flex-col
         w-full gap-5"
        >
          <div className="flex w-full p-3 bg-[#0f0f0f] border border-[#111111] rounded-[12px]">
            <p className="text-[#8c8c8c] font-onest text-[16px] font-medium">
              Name
            </p>
          </div>
          <div className="flex w-full p-3 bg-[#0f0f0f] border border-[#111111] rounded-[12px]">
            <p className="text-[#8c8c8c] font-onest text-[16px] font-medium">
              Email Address
            </p>
          </div>
          <div className="flex w-full p-3 bg-[#0f0f0f] border border-[#111111] rounded-[12px]">
            <p className="text-[#8c8c8c] font-onest text-[16px] font-medium">
              Phone Number
            </p>
          </div>
          <div className="flex w-full p-3 bg-[#0f0f0f] border border-[#111111] rounded-[12px]">
            <p className="text-[#8c8c8c] font-onest text-[16px] font-medium">
              Home Address
            </p>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex w-full p-3 bg-[#0f0f0f] border border-[#111111] rounded-[12px]"
          >
            <p className="text-[#8c8c8c] font-onest text-[16px] font-medium">
              Other
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <OtherFieldModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CreateModal;

import React from "react";

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-800 w-[100%] max-w-4xl rounded-xl p-4 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black dark:text-white text-xl font-bold"
        >
          ✕
        </button>
        <iframe
          src="assets/Harsh_Dahiya_Resume.pdf"
          title="Resume"
          className="w-full h-[80vh] rounded-md"
        />
      </div>
    </div>
  );
};

export default ResumeModal;

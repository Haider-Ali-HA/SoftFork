import React, { useState, useRef } from "react";

const UploadOutline = ({ text, buttonText, onFileSelect }) => {
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file); // Pass the file to the parent component
    }
  };

  return (
    <div className="w-full font-gilroy">
      <h1 className="sm:text-xl font-semibold cursor-pointer">{text}</h1>
      {fileName && (
        <p className="text-sm text-gray-500 mt-2">
          Selected File: <span className="font-medium">{fileName}</span>
        </p>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div
        className="bg-white border cursor-pointer border-primary text-primary font-gilroy mt-5  font-semibold text-base text-center transition-all duration-200 md:text-lg hover:bg-primary hover:text-white  py-2 md:py-4 rounded-lg w-[11rem] md:w-[17rem]"
        onClick={handleButtonClick}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default UploadOutline;

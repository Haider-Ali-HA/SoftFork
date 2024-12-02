import React from "react";

const TextareaField = ({
  placeholderText,
  inputLabel,
  name,
  value,
  onChange,
  rows = 4, // Default number of rows
}) => {
  return (
    <div className="relative w-full font-gilroy">
      {inputLabel && (
        <label
          className="text-xl font-semibold cursor-pointer"
          htmlFor={inputLabel}
        >
          {inputLabel}
        </label>
      )}
      <textarea
        id={inputLabel}
        className="w-full mt-2 border border-[#ADADAD] rounded-lg placeholder:text-[#808080] px-4 py-3 md:py-4 outline-none"
        placeholder={placeholderText}
        required
        name={name}
        value={value || ""}
        onChange={onChange || (() => {})}
        rows={rows}
      />
    </div>
  );
};

export default TextareaField;

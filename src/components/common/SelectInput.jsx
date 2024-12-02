import React from "react";

const SelectInput = ({ options, inputLabel, name, value, onChange }) => {
  return (
    <div className="relative w-full font-gilroy">
      {
        inputLabel && (
          <label
            className="text-xl font-semibold cursor-pointer"
            htmlFor={inputLabel}
          >
            {inputLabel}
          </label>
        )
      }
      <select
        id={inputLabel}
        name={name}
        value={value || ""}
        onChange={onChange || null}
        className="w-full mt-2 border border-[#ADADAD] rounded-lg  px-4 py-3 md:py-4 outline-none bg-white text-[#808080]"
        required
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

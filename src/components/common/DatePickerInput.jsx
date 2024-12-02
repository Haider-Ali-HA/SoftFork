import React from "react";

const DatePickerInput = ({
    placeholderText,
    inputLabel,
    name,
    value,
    onChange,
}) => {
    return (
        <div className=" w-full font-gilroy">
            {inputLabel && (
                <label
                    className="text-xl font-semibold cursor-pointer"
                    htmlFor={inputLabel}
                >
                    {inputLabel}
                </label>
            )}
            <div className="relative">
                <input
                    id={inputLabel}
                    type="date"
                    className="w-full mt-2 border border-[#ADADAD] rounded-lg placeholder:text-[#808080]  px-4 py-3 md:py-4 outline-none  appearance-none" // Added padding-right for icon space
                    placeholder={placeholderText}
                    required
                    name={name}
                    value={value || ""}
                    onChange={onChange || null}
                />

            </div>
        </div>
    );
};

export default DatePickerInput;

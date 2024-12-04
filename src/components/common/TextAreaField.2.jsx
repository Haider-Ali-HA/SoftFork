import React, { useEffect, useState } from "react";

const TextareaField2 = ({
    placeholderText,
    inputLabel,
    name,
    value,
    onChange,
    rows = 4, // Default number of rows
    showWordCount = true, // Word count passed from the parent
    maxWordCount=500,
    lableStyling="",
    textStyling=""
}) => {
    const [wordCount, setWordCount] = useState(0);
    useEffect(() => {

        setWordCount(value.length);
    }, [value]);


    return (
        <div className="relative w-full font-gilroy">
            {inputLabel && (
                <div className="flex justify-between">
                    <label
                        className={`text-xl font-semibold cursor-pointer ${lableStyling}`}
                        htmlFor={inputLabel}
                    >
                        {inputLabel}
                    </label>
                    {showWordCount && <p>{wordCount}/{maxWordCount}</p>}
                </div>
            )}
            <textarea
                id={inputLabel}
                className={`w-full mt-2 border border-[#ADADAD] rounded-lg placeholder:text-[#808080] px-4 py-3 md:py-4 outline-none ${textStyling}`}
                placeholder={placeholderText}
                required
                name={name}
                value={value || ""}
                onChange={onChange || (() => { })}
                rows={rows}
            />
        </div>
    );
};

export default TextareaField2;

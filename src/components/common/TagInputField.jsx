import React, { useState } from "react";

const TagInputField = ({
  label,
  placeholder = "Type something and press Enter",
  tags = [],
  setTags,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission on Enter
      setTags((prevTags) => [...prevTags, inputValue.trim()]);
      setInputValue(""); // Clear input field
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      // Remove the last tag if Backspace is pressed and input is empty
      setTags((prevTags) => prevTags.slice(0, -1));
    }
  };

  const handleTagRemove = (index) => {
    setTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mt-4 font-gilroy">
      <label className="text-xl font-semibold cursor-pointer">{label}</label>
      <div
        className="flex items-center gap-2 flex-wrap w-full mt-2 border border-[#ADADAD] rounded-lg px-4 py-2 md:py-3 outline-none"
        onClick={() => document.getElementById("tagInputField").focus()} // Focus input when the container is clicked
      >
        {/* Render tags */}
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white px-3 py-1 rounded-md flex items-center gap-2 h-10"
          >
            {tag}
            <span
              onClick={() => handleTagRemove(index)}
              className="cursor-pointer text-sm text-gray-200 hover:text-red-400"
            >
              &times;
            </span>
          </div>
        ))}

        {/* Input field */}
        <input
          type="text"
          id="tagInputField"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow h-10 border-none placeholder-gray-400 text-base outline-none"
          placeholder={tags.length ? "" : placeholder}
        />
      </div>
    </div>
  );
};

export default TagInputField;

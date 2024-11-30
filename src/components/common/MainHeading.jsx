import React from "react";

const MainHeading = ({ text }) => {
  return (
    <h1 className="text-3xl w-full text-center md:text-4xl font-gilroy font-bold">
      {text}
    </h1>
  );
};

export default MainHeading;

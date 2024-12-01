import React from 'react';

const ProgressBar = ({ total, fill, color, inPercent = true, }) => {

  let percentage;
  if (!inPercent) {
    // Ensure the fill value does not exceed the total value
    percentage = Math.min((fill / total) * 100, 100);
  } else {
    percentage = fill;
  }

  return (
    <div className="w-full bg-gray-200 rounded-md overflow-hidden">
      <div
        className="h-3 rounded-md"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;
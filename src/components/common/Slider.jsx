import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function CustomSlider({ value, min, max, step, onChange, label }) {
  const getSliderValueLabel = (value) => {
    if (label === "Number of Employees") {
      return `${value}`;
    }
    if (label === "Average Annual Salary") {
      return `${value + 'K'}`;
    }
    if (label === "Employee Turnover Rate") {
      return `${value}%`;
    }
    return value;
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value}
        min={min}
        step={step}
        max={max}
        onChange={onChange}
        valueLabelDisplay="auto"
        valueLabelFormat={getSliderValueLabel}
        sx={{
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#772787',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: '#FFFFFF',
            border: '2px solid #772787',
          },
          '& .MuiSlider-track': {
            backgroundColor: 'gray',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'gray',
          },
        }}
      />
    </Box>
  );
}

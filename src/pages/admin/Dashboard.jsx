import React, { useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
import Slider from "../../components/common/Slider"; // Import your Slider component here

const Dashboard = () => {
  const [slider1Value, setSlider1Value] = useState(0); // Number of Employees
  const [slider2Value, setSlider2Value] = useState(0); // Average Annual Salary
  const [slider3Value, setSlider3Value] = useState(0); // Employee Turnover Rate
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("$ USD");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setDropdownOpen(false);
  };

  return (
    <div className="md:p-3 bg-white min-h-full w-full  font-DMsans">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-4 ">
        {/* Sliders Section */}
        <div className="py-5 rounded-lg px-6 sm:px-0 shadow-[0px_0px_20px_#e2e2e2]   h-full flex w-full lg:w-3/4 gap-2 sm:gap-0 justify-center flex-wrap">
          {/* slider  */}
          <div className="flex flex-col justify-center   w-full sm:w-[21rem] ">
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Number of Employees
              </label>
              <Slider
                value={slider1Value}
                min={0}
                max={1000}
                step={1}
                onChange={(e, newValue) => setSlider1Value(newValue)}
                label="Number of Employees"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2">
                Average Annual Salary
              </label>
              <Slider
                value={slider2Value}
                min={0}
                max={100}
                step={1}
                onChange={(e, newValue) => setSlider2Value(newValue)}
                label="Average Annual Salary"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">
                Employee Turnover Rate
              </label>
              <Slider
                value={slider3Value}
                min={0}
                max={100}
                step={1}
                onChange={(e, newValue) => setSlider3Value(newValue)}
                label="Employee Turnover Rate"
              />
            </div>
            <div className="mt-4 relative inline-block">
              <button
                className="flex items-center justify-between w-36 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
                onClick={toggleDropdown}
              >
                <span>{selectedCurrency}</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Options */}
              {dropdownOpen && (
                <div className="absolute z-10 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => handleCurrencySelect("$ USD")}
                    >
                      $ USD
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => handleCurrencySelect("€ EUR")}
                    >
                      € EUR
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => handleCurrencySelect("£ GBP")}
                    >
                      £ GBP
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Center section */}
          <div className="flex flex-col justify-start   items-start gap-4 w-full sm:w-auto sm:px-10">
            <span className="flex flex-col gap-5">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <VscCircleFilled className="text-primary" />
                  <h3 className="text-xl font-semibold">
                    Productivity Savings
                  </h3>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-primary">
                  $0
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <VscCircleFilled className="text-primary" />
                  <h3 className="text-xl font-semibold">Turnover Savings</h3>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-primary">
                  $0
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <VscCircleFilled className="text-primary" />
                  <h3 className="text-xl font-semibold">Absenteeism Savings</h3>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-primary">
                  $0
                </p>
              </div>
            </span>
          </div>

          {/* Total saving */}
          <div className="flex flex-col justify-center   items-start gap-4 w-full sm:w-auto sm:px-10">
            <span>
              <h3 className="text-xl font-semibold">Total Savings</h3>
              <p className="text-2xl md:text-4xl font-bold text-primary">$0</p>
            </span>
          </div>
        </div>
        {/* Right section */}
        <div className="px-3 flex flex-col gap-2">
          <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
            <h3 className="text-2xl font-medium mb-2 w-full">
              Total Number Of Employees
            </h3>
            <p className="text-3xl md:text-5xl font-bold text-primary">500</p>
            <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
              View All
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2] flex flex-col items-start">
            <h3 className="text-2xl font-medium mb-2 w-full">
              Total Invites Pending
            </h3>
            <p className="text-3xl md:text-5xl font-bold text-primary">39</p>
            <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2]  flex flex-col items-start">
          <h3 className="text-2xl font-medium mb-2 w-full">
            Total Funds Spent So Far
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">$3999</p>
          <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
            View All
          </button>
        </div>{" "}
        <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2]  flex flex-col items-start">
          <h3 className="text-2xl font-medium mb-2 w-full">
            Total Active Members
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">39</p>
          <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
            View All
          </button>
        </div>{" "}
        <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2]  flex flex-col items-start">
          <h3 className="text-2xl font-medium mb-2 w-full">
            Total Funds Allocated
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">$9139</p>
          <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
            View All
          </button>
        </div>{" "}
        <div className="bg-white p-6 rounded-lg shadow-[0px_0px_20px_#e2e2e2]  flex flex-col items-start">
          <h3 className="text-2xl font-medium mb-2 w-full">
            Total Number Of Projects Created
          </h3>
          <p className="text-3xl md:text-5xl font-bold text-primary">39</p>
          <button className="mt-4 px-4 py-1 bg-primary text-white rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

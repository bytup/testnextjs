"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

export const Dropdown = ({ options }) => {
  const selectRef = useRef(null);

  const handleIconClick = () => {
    selectRef.current.focus();
  };
  return (
    <div className="relative inline-block">
      <FaSearch
        className="absolute left-2 top-1/2 text-xs transform -translate-y-1/2 cursor-pointer text-gray-400"
        onClick={handleIconClick}
      />
      <select
        ref={selectRef}
        className="pl-5 border-none rounded-sm text-sm bg-gray-100 py-2 px-4 text-slate-600"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const Input = ({ options }) => {
  return (
    <div className="">
      <select className=" border-none rounded-sm text-sm bg-gray-100 py-2 px-4 text-slate-600">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

"use client"
import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: false, label: "No" },
  { value: true, label: "Yes" },
];

const IsSelect = ({ name, id }) => {
  const [value, setValue] = useState(null);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="select-wrap">
      <Select classNamePrefix='custom-select' name={name} id={id} onChange={onChange} value={value} options={options} placeholder={name==='isAdmin' ? "Is admin? ": "Is active?"} />
    </div>
  );
};

export default IsSelect;

import React from "react";

const Input = ({ type, value, onChange, className, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange} 
      className={`border px-2 py-2 rounded-md ${className}`}
      placeholder={placeholder}
    />  
  );
};

export default Input;

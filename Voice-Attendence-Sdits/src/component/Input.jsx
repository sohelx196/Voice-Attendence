import React from "react";

const Input = ({ type, value, onChange, className, placeholder , required}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange} 
      className={`border px-2 py-2 rounded-md ${className}`}
      placeholder={placeholder}
      required
   
    />  
  );
};

export default Input;

import React from "react";

function InputField({ label, placeholder, name, onChange }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default InputField;

// src/CheckboxMessage.js
import React, { useState } from "react";

function CheckboxMessage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="mt-4">
      <input
        type="checkbox"
        id="check"
        onChange={handleCheckbox}
        className="form-check-input me-2"
      />
      <label For="check" className="form-check-label">
        Check me!
      </label>

      {isChecked && (
        <p className="mt-3 alert alert-success">You checked the box!</p>
      )}
    </div>
  );
}

export default CheckboxMessage;

import React from "react";
import "./select.scss";

export const Select = () => {
  return (
    <div className="form-select">
      <select>
        <option>Work</option>
        <option>Study</option>
        <option>House</option>
      </select>
    </div>
  );
};

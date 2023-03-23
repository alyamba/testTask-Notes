import React from "react";
export interface IInput {
  value: string;
  setValue?: () => void;
  placeholder: string;
  type: string;
}

export const Input = ({ value, setValue, placeholder, type }: IInput) => {
  return (
    <input
      placeholder={placeholder}
      onChange={setValue}
      value={value}
      className={type}
    />
  );
};

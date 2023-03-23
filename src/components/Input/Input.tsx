import React from "react";
import "./input.scss";

export interface IInput {
  value: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

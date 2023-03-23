import React from "react";
import "./textArea.scss";

export interface ITextArea {
  value: string;
  setValue?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  type: string;
}

export const TextArea = ({ value, setValue, placeholder }: ITextArea) => {
  return (
    <textarea placeholder={placeholder} onChange={setValue} value={value} />
  );
};

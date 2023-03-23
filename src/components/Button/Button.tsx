import React, { ReactNode } from "react";
import "./button.scss";

export interface IButton {
  type: string;
  label: string | JSX.IntrinsicElements["img"];
  onPress?: () => void;
}

export const Button = ({ type, label, onPress }: IButton) => {
  return <button className={type} onClick={onPress}>{label as ReactNode}</button>;
};

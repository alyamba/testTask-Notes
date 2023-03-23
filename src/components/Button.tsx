import React, { ReactNode } from "react";

export interface IButton {
  label: string | JSX.IntrinsicElements['img'];
  onPress?: () => void;
}

export const Button = ({ label, onPress }: IButton) => {
  return <button onClick={onPress}>{label as ReactNode}</button>;
};

import React, { ReactNode } from "react";
import "./modal.scss";

export interface IModal {
  active: boolean;
  setActive?: (isActive: boolean) => void;
  onClearStates?: () => void;
  children: ReactNode;
}

export const Modal = ({
  active,
  setActive,
  onClearStates,
  children,
}: IModal) => {
  const setActiveHandler = () => {
    if (setActive) {
      setActive(false);
    }
    if (onClearStates) {
      onClearStates();
    }
  };

  return (
    <div
      className={active ? " modal active" : "modal"}
      onClick={setActiveHandler}
    >
      <div
        className={active ? " modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

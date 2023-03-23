import React from "react";
import { ITag } from "../../types";
import "./select.scss";

export interface ISelect {
  tagsArray: ITag[];
  // onPress?: () => void;
}

export const Select = ({ tagsArray }: ISelect) => {
  return (
    <div className="form-select">
      <select multiple>
        <optgroup label="Теги">
          {tagsArray?.map((el) => {
            return <option>{el.name}</option>;
          })}
        </optgroup>
      </select>
    </div>
  );
};

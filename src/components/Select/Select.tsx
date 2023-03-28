import React from "react";
import { ITag } from "../../types";
import "./select.scss";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";

export interface ISelect {
  tagsArray: ITag[];
  selectedTags: string[];
  setSelectedTags: (event: MultiSelectChangeEvent) => void;
}

export const Select = ({
  tagsArray,
  selectedTags,
  setSelectedTags,
}: ISelect) => {
  console.log("ARRAY: ", tagsArray);
  return (
    <div className="form-select">
      {/* <MultiSelect
        value={selectedTags}
        onChange={(e) => setSelectedTags(e)}
        options={tagsArray}
        optionLabel="label"
        display="chip"
        placeholder="Select tags"
        maxSelectedLabels={3}
        // className="test"
        panelClassName="test"
      /> */}

      {/* <select multiple>
        <optgroup label="Теги">
          {tagsArray?.map((el) => {
            return <option>{el.name}</option>;
          })}
        </optgroup>
      </select> */}
    </div>
  );
};

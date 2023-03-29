import React from "react";
import { Button } from "../Button/Button";
import editIcon from "../../icons/edit.png";
import deleteIcon from "../../icons/delete.png";
import "./note.scss";
import { INote } from "../../types";

export interface INoteComponent {
  title: string;
  text: string;
  id: string;
  editNote: (el: INote["id"]) => void;
  removeNote: (el: INote["id"]) => void;
}

export const Note = ({
  title,
  text,
  id,
  editNote,
  removeNote,
}: INoteComponent) => {
  return (
    <div className="note">
      <div className="note-header">
        <h1>{title}</h1>
        <div className="note-header-buttons">
          <Button
            type="icon-btn"
            label={<img alt="edit" src={editIcon as string} className="icon" />}
            onPress={() => editNote(id)}
          />
          <Button
            type="icon-btn"
            label={
              <img alt="delete" src={deleteIcon as string} className="icon" />
            }
            onPress={() => removeNote(id)}
          />
        </div>
      </div>
      <p>{text}</p>
      <p>Тег</p>
    </div>
  );
};

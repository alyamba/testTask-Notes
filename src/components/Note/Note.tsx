import React from "react";
import { Button } from "../Button/Button";
import editIcon from "../../icons/edit.png";
import deleteIcon from "../../icons/delete.png";
import "./note.scss";

export const Note = () => {
  return (
    <div className="note">
      <div className="note-header">
        <h1>Заголовок</h1>
        <div className="note-header-buttons">
          <Button type='icon-btn'
            label={<img alt="edit" src={editIcon as string} className="icon" />}
          />
          <Button type='icon-btn'
            label={
              <img alt="delete" src={deleteIcon as string} className="icon" />
            }
          />
        </div>
      </div>
      <p>Текст</p>
      <p>Тег</p>
    </div>
  );
};

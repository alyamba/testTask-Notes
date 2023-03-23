import React, { useState } from "react";
import "./App.scss";
import {
  Input,
  Button,
  Note,
  Footer,
  Modal,
  TextArea,
  Select,
} from "./components";
import { INote } from "./types";

const App = () => {
  const [tagSearch, setTagSearch] = useState<string>("");
  const [notes, setNotes] = useState<INote[]>([]);
  const [noteModalActive, setNoteModalActive] = useState<boolean>(false);
  const [tagModalActive, setTagModalActive] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [tag, setTag] = useState<string>("");

  const onNoteCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setTitle("");
      setNote("");
      setNoteModalActive(false);
    }
  };

  const onTagCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setTag("");
      setTagModalActive(false);
    }
  };

  return (
    <div className="App">
      <nav>
        <Button
          type="nav-btn"
          label="Add note"
          onPress={() => setNoteModalActive(true)}
        />
        <Button
          type="nav-btn"
          label="Add tag"
          onPress={() => setTagModalActive(true)}
        />
        <Input placeholder="Search by tag" type="search" value={tagSearch} />
      </nav>
      <div className="notes-container">
        <Note />
      </div>
      <Footer />
      <Modal active={noteModalActive} setActive={setNoteModalActive}>
        <h1>New note</h1>
        <Input
          placeholder="Title"
          value={title}
          type="form__input"
          setValue={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Note"
          value={note}
          type="form__input"
          setValue={(e) => setNote(e.target.value)}
        />
        <Select />
        <div className="btns-container">
          <Button type="modal-btn" label="Save" /*onPress={onSaveHandler}*/ />
          <Button type="modal-btn" label="Cancel" onPress={onNoteCancelHandler} />
        </div>
      </Modal>
      <Modal active={tagModalActive} setActive={setTagModalActive}>
        <h1>New tag</h1>
        <Input
          placeholder="Tag"
          value={tag}
          type="form__input"
          setValue={(e) => setTag(e.target.value)}
        />
        <div className="btns-container">
          <Button type="modal-btn" label="Save" /*onPress={onSaveHandler}*/ />
          <Button type="modal-btn" label="Cancel" onPress={onTagCancelHandler} />
        </div>
      </Modal>
    </div>
  );
};

export default App;

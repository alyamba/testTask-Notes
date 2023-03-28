import { MultiSelectChangeEvent } from "primereact/multiselect";
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
import { INote, ITag } from "./types";

const App = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [tagSearch, setTagSearch] = useState<string>("");
  const [noteModalActive, setNoteModalActive] = useState<boolean>(false);
  const [tagModalActive, setTagModalActive] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteText, setNoteText] = useState<string>("");
  const [noteTags, setNoteTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");

  console.log(notes);

  const onNoteCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setNoteTitle("");
      setNoteText("");
      setNoteModalActive(false);
    }
  };

  const onTagCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setTag("");
      setTagModalActive(false);
    }
  };

  const onNoteCreateHandler = () => {
    setNotes(() => [...notes, { title: noteTitle, text: noteText }]);
    setNoteTitle("");
    setNoteText("");
    setNoteModalActive(false);
  };

  const onNewTagHandler = () => {
    setTags(() => [...tags, { label: tag.toLowerCase(), value: tag }]);
    setTag("");
    setTagModalActive(false);
  };
  console.log("SELECTED: ", noteTags);
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
          value={noteTitle}
          type="form__input"
          setValue={(e) => setNoteTitle(e.target.value)}
        />
        <TextArea
          placeholder="Note"
          value={noteText}
          type="form__input"
          setValue={(e) => setNoteText(e.target.value)}
        />
        {/* <Select
          tagsArray={tags}
          selectedTags={noteTags}
          setSelectedTags={(event: MultiSelectChangeEvent) => {
            console.log(event);
            setNoteTags((old) => [...old, ...event.value]);
          }}
        /> */}
        <div className="btns-container">
          <Button type="modal-btn" label="Save" onPress={onNoteCreateHandler} />
          <Button
            type="modal-btn"
            label="Cancel"
            onPress={onNoteCancelHandler}
          />
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
          <Button type="modal-btn" label="Save" onPress={onNewTagHandler} />
          <Button
            type="modal-btn"
            label="Cancel"
            onPress={onTagCancelHandler}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;

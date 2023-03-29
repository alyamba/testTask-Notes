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
import { UUID } from "uuid-generator-ts";
import { INote, ITag } from "./types";

const App = () => {
  const uuid = new UUID();
  const notesList = localStorage.getItem("notesList");
  const [notes, setNotes] = useState<INote[]>(
    notesList ? JSON.parse(notesList) : []
  );
  const [tags, setTags] = useState<ITag[]>([]);
  const [tagSearch, setTagSearch] = useState<string>("");
  const [newNoteModalActive, setNewNoteModalActive] = useState<boolean>(false);
  const [editNoteModalActive, setEditNoteModalActive] =
    useState<boolean>(false);
  const [tagModalActive, setTagModalActive] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteText, setNoteText] = useState<string>("");
  const [noteTags, setNoteTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

  console.log(notes);

  const onClearNotesStates = () => {
    setNoteTitle("");
    setNoteText("");
  };

  const onNoteCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      onClearNotesStates();
      setNewNoteModalActive(false);
    }
  };

  const onTagCancelHandler = () => {
    if (window.confirm("Are you sure?")) {
      setTag("");
      setTagModalActive(false);
    }
  };

  const onNoteCreateHandler = () => {
    const newNote = {
      title: noteTitle,
      text: noteText,
      id: uuid.getDashFreeUUID(),
    };
    localStorage.setItem("notesList", JSON.stringify([...notes, newNote]));
    setNotes((oldNotes) => [...oldNotes, newNote]);
    onClearNotesStates();
    setNewNoteModalActive(false);
  };

  const onNoteEditHandler = (id: string) => {
    setEditingNoteId(id);
    setNoteTitle(notes.find((el) => el.id === id)?.title || "");
    setNoteText(notes.find((el) => el.id === id)?.text || "");
  };

  const onSaveEditedNote = (id: string) => {
    const newNotesList = notes.reduce((acc, el) => {
      if (el.id === id) {
        return [
          ...acc,
          {
            title: noteTitle,
            text: noteText,
            id: el.id,
          },
        ];
      }
      return [...acc, el];
    }, [] as INote[]);
    localStorage.setItem("notesList", JSON.stringify(newNotesList));
    setNotes(newNotesList);
    onClearNotesStates();
    setEditingNoteId(null);
    setEditNoteModalActive(false);
  };

  const onNoteRemoveHandler = (id: string) => {
    const newNotesList = notes.filter((el) => el.id !== id);
    localStorage.setItem("notesList", JSON.stringify(newNotesList));
    setNotes(newNotesList);
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
          onPress={() => setNewNoteModalActive(true)}
        />
        <Button
          type="nav-btn"
          label="Add tag"
          onPress={() => setTagModalActive(true)}
        />
        <Input placeholder="Search by tag" type="search" value={tagSearch} />
      </nav>
      <div className="notes-container">
        {notes?.map((el) => {
          return (
            <Note
              title={el.title}
              text={el.text}
              id={el.id}
              editNote={(id) => {
                setEditNoteModalActive(true);
                onNoteEditHandler(id);
              }}
              removeNote={onNoteRemoveHandler}
            />
          );
        })}
      </div>
      <Footer />
      <Modal
        active={newNoteModalActive}
        setActive={setNewNoteModalActive}
        onClearStates={onClearNotesStates}
      >
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
      <Modal
        active={editNoteModalActive}
        setActive={setEditNoteModalActive}
        onClearStates={onClearNotesStates}
      >
        <h1>Edit note</h1>
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
          <Button
            type="modal-btn"
            label="Save"
            onPress={() => onSaveEditedNote(editingNoteId as string)}
          />
          <Button
            type="modal-btn"
            label="Cancel"
            onPress={() => {
              onClearNotesStates();
              setEditingNoteId(null);
              setEditNoteModalActive(false);
            }}
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

import React, { useState } from "react";
import "./App.scss";
import { Input, Button, Note, Footer } from "./components";

const App = () => {
  const [tagSearch, setTagSearch] = useState<string>("");

  return (
    <div className="App">
      <nav>
        <Button label="Add note" />
        <Button label="Add tag" />
        <Input placeholder="Search by tag" type="search" value={tagSearch} />
      </nav>
      <div className="notes-container">
        <Note />
      </div>
      <Footer/>
    </div>
  );
};

export default App;

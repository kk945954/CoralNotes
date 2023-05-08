import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [noteList, setNoteList] = useState([]);

  function inputNote(e) {
    const { value, name } = e.target;
    setNote((preNote) => {
      return { ...preNote, [name]: value };
    });
  }

  function addNotes(e) {
    setNoteList((preNotes) => [...preNotes, note]);
    setNote({
      title: "",
      content: ""
    });
    console.log(noteList);

    e.preventDefault();
  }

  function deleteNote(id) {
    setNoteList((preNotes) => {
      return preNotes.filter((note, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} inputNote={inputNote} note={note} />
      {noteList.map((eachNote, index) => {
        return (<Note
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          deleteNote={deleteNote}
        />);
      })}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  
  const [isExapnded, setExpended] = useState(false);

  function isClicked() {
    setExpended(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExapnded && (
          <input
            onChange={props.inputNote}
            name="title"
            value={props.note.title}
            placeholder="Task Title"
          />
        )}
        <textarea
          onClick={isClicked}
          onChange={props.inputNote}
          name="content"
          value={props.note.content}
          placeholder="Description"
          rows={isExapnded ? 3 : 1}
        />
        <Zoom in={isExapnded}>
          <Fab onClick={props.addNotes}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

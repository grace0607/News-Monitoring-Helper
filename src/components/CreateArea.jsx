import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    URL: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      URL: "",
      title: "",//Change to title pulled from backend
      content: ""//Change to summary pulled from backend
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="URL"
          onChange={handleChange}
          value={note.URL}
          placeholder="URL"
        />
        <button onClick={submitNote}>Submit</button>
      </form>
    </div>
  );
}

export default CreateArea;
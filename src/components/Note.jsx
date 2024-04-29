import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  // Generic function to copy text to the clipboard
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="note">
      <h1>{props.URL}
        <button onClick={() => copyToClipboard(props.URL)}>Copy URL</button>
      </h1>
      <p>{props.title}
        <button onClick={() => copyToClipboard(props.title)}>Copy Title</button>
      </p>
      <p>{props.content}
        <button onClick={() => copyToClipboard(props.content)}>Copy Content</button>
      </p>
      <button onClick={handleClick}>DELETE NOTE</button>
    </div>
  );
}

export default Note;


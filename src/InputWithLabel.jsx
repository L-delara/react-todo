import * as React from "react";

function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="title">{props.children}</label>
      <input
        type="text"
        name="title"
        id="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        placeholder="Add a new to-do"
        autoFocus
      />
    </>
  );
}
export default InputWithLabel;

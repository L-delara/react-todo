import { useEffect, useRef } from "react";

function InputWithLabel(props) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

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
        ref={inputRef}
      />
    </>
  );
}
export default InputWithLabel;

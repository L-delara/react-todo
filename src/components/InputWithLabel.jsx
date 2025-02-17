import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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
        placeholder="add a new to-do"
        ref={inputRef}
      />
    </>
  );
}

InputWithLabel.propTypes = {
  props: PropTypes.string,
};

export default InputWithLabel;

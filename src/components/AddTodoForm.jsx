import * as React from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <h3>add new to-do:</h3>
      </InputWithLabel>
      <button className="addButton" type="submit">
        add
      </button>
    </form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;

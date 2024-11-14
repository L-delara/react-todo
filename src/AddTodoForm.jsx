import * as React from "react";

function AddTodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Add a new to-do"
      />
      <button type="submit">Add</button>{" "}
    </form>
  );
}

export default AddTodoForm;

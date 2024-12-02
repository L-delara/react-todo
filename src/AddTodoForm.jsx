import * as React from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        name="title"
        id="title"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Add a new to-do"
      />
      <button type="submit">Add</button>{" "}
    </form>
  );
}

export default AddTodoForm;

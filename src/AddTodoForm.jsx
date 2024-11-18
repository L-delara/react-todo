import * as React from "react";

function AddTodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = inputValue; // Explicitly store the value in title
    console.log(title); // Log the value in the console
    onAddTodo(title); // Pass the value to the parent
    setInputValue(""); // Clear the input field
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

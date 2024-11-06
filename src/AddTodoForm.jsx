import * as React from "react";

function AddTodoForm() {
  return (
    <div>
      <form>
        <label htmlFor="Title" id="todoTitle">
          Title:{" "}
        </label>
        <input type="text" id="todoTitle" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;

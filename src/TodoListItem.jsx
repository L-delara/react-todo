import * as React from "react";

const TodoListItem = ({ todoList }) => {
  return (
    <div>
      <li>{todoList.title}</li>
    </div>
  );
};

export default TodoListItem;

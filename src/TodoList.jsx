import * as React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;

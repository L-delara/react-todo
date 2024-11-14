import * as React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "get groceries",
  },
  {
    id: 2,
    title: "make dinner",
  },
  {
    id: 3,
    title: "go for walk",
  },
  {
    id: 4,
    title: "read my book",
  },
];

function TodoList(props) {
  return (
    <div>
      <ul>
        {todoList.map((TodoListItem) => {
          return <li key={TodoListItem.id}>{TodoListItem.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;

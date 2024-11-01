import * as React from "react";

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
    title: "read book",
  },
];

function App() {
  return (
    <div>
      <h1>To-Do List</h1>

      <ul>
        {todoList.map(function (todoList) {
          return <li>{todoList.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

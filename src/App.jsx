import * as React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

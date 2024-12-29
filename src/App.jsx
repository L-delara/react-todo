import * as React from "react";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentTodosList = JSON.parse(
      localStorage.getItem("savedTodoList")
    );
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const object = {
          data: {
            todoList: currentTodosList,
          },
        };
        resolve(object);
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const todoListString = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", todoListString);
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  function removeTodo(id) {
    const deletedTodoItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoItem);
  }

  return (
    <>
      <h1>To-Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;

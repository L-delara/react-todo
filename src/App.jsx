import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [sortABC, setSortABC] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  async function postTodos(todoTitle) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              title: todoTitle,
            },
          },
        ],
      }),
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      const newTodos = {
        title: data.records[0].fields.title,
        id: data.records[0].id,
      };

      setTodoList((oldList) => [newTodos, ...oldList]);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      const todos = data.records.map((todoItem) => {
        return {
          id: todoItem.id,
          title: todoItem.fields.title,
        };
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const sortedTodoList = [...todoList].sort((objectA, objectB) => {
        const titleA = objectA.title;
        const titleB = objectB.title;

        if (sortABC) {
          return titleA.localeCompare(titleB);
        } else {
          return titleB.localeCompare(titleA);
        }
      });

      setTodoList(sortedTodoList);
    }
  }, [sortABC, isLoading]);

  function addTodo(todoTitle) {
    postTodos(todoTitle);
  }

  function removeTodo(id) {
    const deletedTodoItem = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoItem);
  }
  function handleSortClick() {
    setSortABC(!sortABC);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="todoContainer">
                <h1>To-Do List</h1>
                <AddTodoForm onAddTodo={addTodo} />
                <button onClick={handleSortClick} className="sorter">
                  Change Sort
                </button>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo}
                  />
                )}
              </div>
              <footer className="footerContainer">
                Coded by{" "}
                <a
                  href="https://github.com/L-delara/react-todo"
                  target="_blank"
                >
                  Ligia De Lara
                </a>{" "}
                with{" "}
                <a href="https://codethedream.org/" target="_blank">
                  CodeTheDream
                </a>
                .
                <br />
              </footer>
            </main>
          }
        />
        <Route
          path="/new"
          element={
            <main>
              <h1>New To-do List</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

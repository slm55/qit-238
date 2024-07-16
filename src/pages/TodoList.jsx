import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function changeStatus(id, status) {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.status = status;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={todo}
        placeholder="Enter a new todo..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length, title: todo, status: false }]);
          setTodo("");
        }}
      >
        Add
      </button>
      {todos.map((todo) => <Todo todo={todo} change={changeStatus} />)}
    </div>
  );
}

export default TodoList;

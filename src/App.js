import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  //we need a list of todo's
  //useState
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(input);
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([input, ...todos]);
  };

  return (
    <div className="app">
      <h1>To-do App</h1>

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button disabled={!input} type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>

      {todos.map((todo) => (
        <Todo title={todo} />
      ))}
    </div>
  );
}

export default App;

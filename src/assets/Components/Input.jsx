import "./input.css";
import { useState } from "react";
import Heading from "./Heading";

export default function Input() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleClick() {
    if (!todo) return;
    setTodos([...todos, todo]);
    setTodo("");
    setCount(count + 1);
  }

  function removeTodo(t) {
    setTodos([...todos.filter((todo) => todo !== t)]);
    setCount(count - 1);
  }

  return (
    <>
    <Heading count={count} />
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a Todo"
            onChange={(e) => handleChange(e)}
            value={todo}
          />
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          <ul>
            {todos.map((t, index) => (
              <li key={index}>
                <span>{t}</span>
                <button onClick={() => removeTodo(t)} className="delete">
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

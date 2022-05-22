import { useState } from "react";
import uniqid from "uniqid";

export default function NewItem({ setTodos }) {
  const [newItem, setNewItem] = useState("");
  const newTodo = {
    id: uniqid(),
    title: newItem,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [newTodo, ...todos]);
    document.getElementById("todo").value = "";
  };

  function handleInput(event) {
    setNewItem(event.target.value);
  }

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type="text"
          className="form-control w-25 m-auto mt-5 mb-5"
          id="todo"
          placeholder="Insert new To do"
          required
        ></input>
      </form>
    </div>
  );
}

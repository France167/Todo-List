import "./App.css";
import Todo from "./components/Todo";
import NewItem from "./components/NewItem";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setTodos(json.splice(0, 20));
    }
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1 className="mt-5">To do list</h1>
      <NewItem setTodos={setTodos} todos={todos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

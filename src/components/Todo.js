export default function Todo({ todos, setTodos }) {
  function handleDelete(id) {
    return function (e) {
      e.stopPropagation();
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  }

  function handleComplete(index) {
    return function () {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
      console.log(newTodos);
    };
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <ul className="list-group container w-50 my-5">
            <li
              onClick={handleComplete(index)}
              className={` ${
                todo.completed
                  ? "list-group-item list-group-item-dark text-decoration-line-through d-flex justify-content-between"
                  : "list-group-item d-flex justify-content-between"
              }`}
            >
              {index + 1} <b>{todo.title}</b>
              <span>
                <button
                  onClick={handleDelete(todo.id)}
                  className="btn btn-danger"
                  type="button"
                >
                  Delete
                </button>
              </span>
            </li>
            {/* <li className="list-group-item">
              <button
                onClick={handleDelete(todo.id)}
                className="btn btn-danger"
                type="button"
              >
                x
              </button>
            </li> */}
          </ul>
        </div>
      ))}
    </div>
  );
}

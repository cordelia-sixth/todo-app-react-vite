import "./App.css";
import useTodos from "./hooks/useTodos";
import TodoCreate from "./todo/TodoCreate";
import TodoFilter from "./todo/TodoFilter";
import TodoItem from "./todo/TodoItem";

const App = () => {
  const todos = useTodos();

  return (
    <div className="container">
      <h1>Todo</h1>

      <TodoCreate createTodo={todos.create} />
      <TodoFilter onSetFilter={todos.onSetFilter} />
      {todos.getFilteredTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggleCompleted={todos.toggle}
          onRemove={todos.remove}
        />
      ))}

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="タスクを追加"
          className="todo-input"
          autoFocus
        />
        <button type="button" onClick={handleClick} className="cancel">
          <TiDelete />
        </button>
      </form>

      <div className="todo-filter">
        <label htmlFor="all" className="my-radio">
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            onChange={handleFilterChange}
            defaultChecked
          />
          <span className="radio-mark"></span>
          All
        </label>
        <label htmlFor="completed" className="my-radio">
          <input
            type="radio"
            id="completed"
            name="filter"
            value="completed"
            onChange={handleFilterChange}
          />
          <span className="radio-mark"></span>
          Completed
        </label>

        <label htmlFor="incompleted" className="my-radio">
          <input
            type="radio"
            id="incompleted"
            name="filter"
            value="incompleted"
            onChange={handleFilterChange}
          />
          <span className="radio-mark"></span>
          Incompleted
        </label>
      </div>

      <ul className="todo-list">
        {filteredTodos[filter].map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => handleCompleted(todo)}
              className="toggle"
              checked={todo.completed}
            />
            <input
              type="text"
              onChange={(e) => handleEdit(todo, e.target.value)}
              value={todo.value}
              className="todo-value"
              ref={inputRef}
            />
            <div className="todo-menu">
              <button
                type="button"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
              >
                <MdModeEdit />
              </button>
              <button type="button" onClick={() => handleDeleted(todo)}>
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;

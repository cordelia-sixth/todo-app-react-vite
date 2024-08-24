import { useRef, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import "./App.css";
import { FilterStatus } from "./types/filterStatus";
import { Todo } from "./types/todo";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      completed: false,
    };
    setTodos((todos) => [newTodo, ...todos]);
    setText("");
  };

  const handleCompleted = (target: Todo) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo === target) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleEdit = (target: Todo, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo === target) {
          return { ...todo, value };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleDeleted = (target: Todo) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo !== target);
    });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value as FilterStatus);
  };

  const filteredTodos = {
    all: todos,
    completed: todos.filter((todo) => todo.completed),
    incompleted: todos.filter((todo) => !todo.completed),
  } as const satisfies {
    [key in FilterStatus]: Todo[];
  };

  return (
    <div className="container">
      <h1>Todo</h1>

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

      <form onSubmit={handleSubmit}>
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
      </ul>
    </div>
  );
};

export default App;

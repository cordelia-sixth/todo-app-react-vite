import { MdDelete, MdModeEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import "./App.css";

const App = () => {
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
            defaultChecked
          />
          <span className="radio-mark"></span>
          All
        </label>
        <label htmlFor="completed" className="my-radio">
          <input type="radio" id="completed" name="filter" value="completed" />
          <span className="radio-mark"></span>
          Completed
        </label>

        <label htmlFor="incompleted" className="my-radio">
          <input
            type="radio"
            id="incompleted"
            name="filter"
            value="incompleted"
          />
          <span className="radio-mark"></span>
          Incompleted
        </label>
      </div>

      <form action="">
        <input
          type="text"
          placeholder="タスクを追加"
          className="todo-input"
          autoFocus
        />
        <button type="button" className="cancel">
          <TiDelete />
        </button>
      </form>

      <ul className="todo-list">
        <li>
          <input type="checkbox" className="toggle" />
          <input type="text" value="買い物" className="todo-value" />
          <div className="todo-menu">
            <button>
              <MdModeEdit />
            </button>
            <button>
              <MdDelete />
            </button>
          </div>
        </li>

        <li>
          <input type="checkbox" className="toggle" />
          <input type="text" value="買い物" className="todo-value" />
          <div className="todo-menu">
            <button>
              <MdModeEdit />
            </button>
            <button>
              <MdDelete />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default App;

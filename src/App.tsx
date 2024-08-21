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
        <input type="text" />
        <button type="submit">Create</button>
      </form>
      <ul>
        <li>
          <input type="checkbox" />
          <input type="text" value="買い物" />
          <button>X</button>
        </li>
        <li>
          <input type="checkbox" />
          <input type="text" value="運動" />
          <button>X</button>
        </li>
      </ul>
    </div>
  );
};

export default App;

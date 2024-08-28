type Props = {
  onSetFilter: (filter: string) => void;
};

/**
 * 表示したいTodoのステータスを変更するコンポーネント
 */
const TodoFilter = ({ onSetFilter }: Props) => {
  return (
    <div className="todo-filter">
      <label htmlFor="all" className="my-radio">
        <input
          type="radio"
          id="all"
          name="filter"
          value="all"
          onChange={(e) => onSetFilter(e.target.value)}
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
          onChange={(e) => onSetFilter(e.target.value)}
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
          onChange={(e) => onSetFilter(e.target.value)}
        />
        <span className="radio-mark"></span>
        Incompleted
      </label>
    </div>
  );
};

export default TodoFilter;

import { MdDelete } from "react-icons/md";

type Props = {
  id: number;
  title: string;
  completed: boolean;
  onToggleCompleted: (targetId: number) => void;
  // onEdit: (targetId: number) => void;
  onRemove: (targetId: number) => void;
};

/**
 * Todoを1つ表現する
 */
// const TodoItem = ({ id, title, completed, toggleCompleted, remove }: Props) => {
const TodoItem = ({
  id,
  title,
  completed,
  onToggleCompleted,
  onRemove,
}: Props) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={() => onToggleCompleted(id)}
        className="toggle"
        checked={completed}
      />
      <p>{title}</p>
      <div className="todo-menu">
        <button type="button" onClick={() => onRemove(id)}>
          <MdDelete />
        </button>
      </div>
    </>
  );
};

export default TodoItem;

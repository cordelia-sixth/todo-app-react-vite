import { useState } from "react";

type Props = {
  createTodo: (title: string) => void;
};

/**
 * Todoを新規作成するコンポーネント
 * @param createTodo Todoを新規作成する関数
 */
const TodoCreate = ({ createTodo }: Props) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="タスクを追加"
        className="todo-input"
        autoFocus
      />
      {/* <button type="button" onClick={() => setTitle("")} className="cancel">
        <TiDelete />
      </button> */}
    </form>
  );
};

export default TodoCreate;

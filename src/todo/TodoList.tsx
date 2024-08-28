import { Todo } from "../types";

type Props = {
  toggle: (targetId: number) => void;
  edit: (targetId: number, newTitle: string) => void;
  remove: (targetId: number) => void;
  getFilteredTodos: () => Todo[];
};

/**
 * Todoを表示するコンポーネント
 */
const TodoList = ({ toggle, edit, remove, getFilteredTodos }: Props) => {
  return (
    <>
      {/* {getFilteredTodos().map((todo) => (
        <TodoItem {...todo} />
      ))} */}
    </>
  );
};

export default TodoList;

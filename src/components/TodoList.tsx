import { memo } from "react";
import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  onChange: <Key extends keyof Todo, Value extends Todo[Key]>(
    target: Todo,
    key: Key,
    value: Value,
  ) => void;
};

const TodoList = memo(({ todos, onChange }: Props) => {
  const updateTodo = <Key extends keyof Todo, Value extends Todo[Key]>(
    target: Todo,
    key: Key,
    value: Value,
  ) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo === target) {
          return { ...todo, [key]: value };
        }
        return todo;
      });
      return updatedTodos;
    });
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            onChange={() => onChange(todo, "completed", !todo.completed)}
            checked={todo.completed}
            disabled={todo.deleted}
          />
          <input
            type="text"
            onChange={(e) => onChange(todo, "title", e.target.value)}
            value={todo.title}
            disabled={todo.completed || todo.deleted}
          />
          <button onClick={() => onChange(todo, "deleted", !todo.deleted)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
});

export default TodoList;

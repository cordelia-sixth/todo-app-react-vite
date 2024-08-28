import useTodoItems from "../features/useTodoItems";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

/**
 * Todo画面本体
 */
const TodoPage = () => {
  const todoItems = useTodoItems();

  return (
    <>
      <TodoCreate onCreateTodo={todoItems.create} />
      {/* {todoItems.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          toggleCompleted={todoItems.toggleCompleted}
          remove={todoItems.remove}
        />
      ))} */}
      <TodoList {...todoItems} />
    </>
  );
};

export default TodoPage;

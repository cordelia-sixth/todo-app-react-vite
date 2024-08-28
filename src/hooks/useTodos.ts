// Todoの管理と操作

import { useCallback, useState } from "react";
import { Filter, isFilter, Todo } from "../types";

/**
 * フックの戻り値を表す型
 * @param todos Todoリスト
 * @function create Todoを作成する
 * @function toggle Todoの完了、未完了を変更する
 * @function edit Todoのタイトルを編集する
 * @function remove Todoを削除する
 * @function onSetFilter 現在のフィルターをセットする
 * @function getFilteredTodos フィルタリングされたTodoリストを返す
 */
type Return = {
  todos: Todo[];
  create: (title: string) => void;
  toggle: (targetId: number) => void;
  edit: (targetId: number, newTitle: string) => void;
  remove: (targetId: number) => void;
  onSetFilter: (value: string) => void;
  getFilteredTodos: () => Todo[];
};

const useTodos = (): Return => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const create: Return["create"] = useCallback((title) => {
    if (!title) return;

    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }, []);

  const toggle: Return["toggle"] = useCallback((targetId) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === targetId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  }, []);

  const edit: Return["edit"] = useCallback((targetId, newTitle) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === targetId
          ? {
              ...todo,
              title: newTitle,
            }
          : todo,
      ),
    );
  }, []);

  const remove: Return["remove"] = useCallback((targetId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== targetId));
  }, []);

  const onSetFilter: Return["onSetFilter"] = useCallback((value) => {
    if (isFilter(value)) {
      setFilter(value);
    }
  }, []);

  const getFilteredTodos: Return["getFilteredTodos"] = useCallback(() => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incompleted":
        return todos.filter((todo) => !todo.completed);
    }
  }, [todos, filter]);

  return {
    todos,
    create,
    toggle,
    edit,
    remove,
    onSetFilter,
    getFilteredTodos,
  };
};

export default useTodos;

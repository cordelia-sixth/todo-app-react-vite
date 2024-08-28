import { useCallback, useState } from "react";

/**
 * Todoの型
 */
type Todo = {
  /** TodoのID */
  id: number;
  /** Todoのタイトル */
  title: string;
  /** Todoのステータス */
  completed: boolean;
};

/**
 * このフックの戻り値の型
 */
type ReturnValue = {
  /** 全てのTodo */
  todos: Todo[];

  /**
   * Todoを新規作成する関数
   * @param title Todoのタイトル
   * @returns {void}
   */
  create: (title: string) => void;

  /**
   * Todoのステータスを変更する関数
   * @param targetId 対象TodoのID
   * @returns {void}
   */
  toggleCompleted: (targetId: number) => void;

  /**
   * Todoを削除する関数
   * @param targetId 対象TodoのID
   * @returns {void}
   */
  remove: (targetId: number) => void;
};

/**
 * Todoを管理する
 * @returns
 */
const useTodos = (): ReturnValue => {
  // 全てのTodo
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Todoを新規作成する
   */
  const create: ReturnValue["create"] = useCallback((title) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  }, []);

  /**
   * Todoのステータスを変更する
   */
  const toggleCompleted: ReturnValue["toggleCompleted"] = useCallback(
    (targetId) => {
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
    },
    [],
  );

  /**
   * Todoを削除する関数
   */
  const remove: ReturnValue["remove"] = useCallback((targetId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== targetId));
  }, []);

  return { todos, create, toggleCompleted, remove };
};

export default useTodos;

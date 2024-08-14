import { useEffect, useState } from "react";
import "./App.css";
import { isTodos } from "./lib/isTodo";

const App = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // 画面読み込み時にtodoを読み込む
  useEffect(() => {
    const data = localStorage.getItem("todo-react-vite");
    const init = JSON.parse(data || "[]");
    if (isTodos(init)) {
      setTodos(init);
    }
  }, []);

  useEffect(() => {
    if (isTodos(todos)) {
      localStorage.setItem("todo-react-vite", JSON.stringify(todos));
    }
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      checked: false,
      removed: false,
    };

    // 新しいtodoを先頭にしてstateにセット
    setTodos((todos) => [newTodo, ...todos]);

    // 入力フォームをクリア
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value };
        }
        return todo;
      });
      return newTodos;
    });
  };

  /**
   * todoの完了状態を変更する
   * @param id TodoのID
   * @param checked Todoの完了フラグ
   */
  const handleCheck = (id: number, checked: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });

      return newTodos;
    });
  };

  /**
   * todoの削除状態を変更する
   * @param id todoのID
   * @param removed 削除状態を表すフラグ
   */
  const handleRemove = (id: number, removed: boolean) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, removed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  /**
   * 表示したいtodoのフィルター状態を変更
   * @param filter 現在のフィルター
   */
  const handleFilter = (filter: Filter) => {
    setFilter(filter);
  };

  // フィルタリングされたtodoリストを返す
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "all":
        return !todo.removed;
      case "checked":
        return todo.checked && !todo.removed;
      case "unchecked":
        return !todo.checked && !todo.removed;
      case "removed":
        return todo.removed;
      default:
        return todo;
    }
  });

  // 削除済みのtodoを完全削除する
  const handleEmpty = () => {
    // removedがfalseであるオブジェクトだけ取り出す。
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  };

  /**
   * 指定したTodoのプロパティを変更する
   * @param id TodoのID
   * @param key 変更したいプロパティのキー
   * @param value 変更したいプロパティの値
   */
  const handleTodo = <
    /** id, value, checked, removed のどれかであることを制約 */
    K extends keyof Todo,
    /** number, string, boolean 型のどれかであることを制約 */
    V extends Todo[K],
  >(
    // 対象のTodoのID
    id: number,
    // 変更したいプロパティのキー
    key: K,
    // 変更したい値
    value: V,
  ) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, [key]: value };
        }
        return todo;
      });

      return newTodos;
    });
  };

  return (
    <div>
      <select
        defaultValue="all"
        onChange={(e) => handleFilter(e.currentTarget.value as Filter)}
      >
        <option value="all">全てのtodo</option>
        <option value="checked">完了したtodo</option>
        <option value="unchecked">現在のtodo</option>
        <option value="removed">ゴミ箱</option>
      </select>

      {filter === "removed" ? (
        <button
          onClick={handleEmpty}
          disabled={todos.filter((todo) => todo.removed).length === 0}
        >
          ゴミ箱を空にする
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            disabled={filter === "checked"}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="submit"
            value="Add"
            disabled={filter === "checked"}
            onSubmit={handleSubmit}
          />
        </form>
      )}

      <ul>
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                disabled={todo.removed}
                checked={todo.checked}
                onChange={() => handleTodo(todo.id, "checked", !todo.checked)}
              />
              <input
                type="text"
                disabled={todo.checked || todo.removed}
                value={todo.value}
                // onChange={(e) => handleEdit(todo.id, e.target.value)}
                onChange={(e) => handleTodo(todo.id, "value", e.target.value)}
              />
              <button
                name="remove"
                // onClick={() => handleRemove(todo.id, !todo.removed)}
                onClick={() => handleTodo(todo.id, "removed", !todo.removed)}
              >
                {todo.removed ? "復元" : "削除"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

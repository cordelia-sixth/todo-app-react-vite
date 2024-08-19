import { useState } from "react";
import { Todo } from "./types/todo";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type..."
          autoFocus
        />
      </form>
    </>
  );
};

export default App;

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const TodoInput = ({ onSubmit, onChange, text }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={text}
        placeholder="Type..."
        autoFocus
      />
    </form>
  );
};

export default TodoInput;

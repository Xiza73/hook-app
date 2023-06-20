import { Button, TextField } from "@mui/material";

export interface AddTodoProps {
  handleAddTodo: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

export const AddTodo: React.FC<AddTodoProps> = ({
  handleAddTodo,
  handleChange,
  name,
  value,
}) => {
  return (
    <div className="flex justify-start items-center gap-4 mb-3">
      <TextField
        label="Add Todo"
        variant="outlined"
        size="small"
        className="w-72"
        value={value}
        name={name}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  );
};

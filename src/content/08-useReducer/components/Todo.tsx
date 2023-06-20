import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo as TodoType } from "..";

export interface TodoProps {
  todo: TodoType;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

export const TodoItem: React.FC<TodoProps> = ({
  todo: { id, description, done },
  handleDelete,
  handleToggle,
}) => {
  return (
    <ListItem
      key={id}
      className={`w-auto ${done ? "bg-green-200" : "bg-red-200"}`}
    >
      <ListItemAvatar>
        <Avatar>
          <DeleteIcon
            onClick={() => handleDelete(id)}
            className="cursor-pointer"
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={description}
        secondary={done ? "Done" : "Pending"}
        className="max-w-lg cursor-pointer"
        onClick={() => handleToggle(id)}
      />
    </ListItem>
  );
};

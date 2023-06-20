import { Button } from "@mui/material";

export interface TodoActionsProps {
  handleToggleAll: (value: boolean) => void;
  handleDeleteAll: () => void;
}

export const TodoActionsButtons: React.FC<TodoActionsProps> = ({
  handleToggleAll,
  handleDeleteAll,
}) => {
  return (
    <div className="w-max flex justify-between items-center gap-4">
      <Button
        variant="contained"
        color="warning"
        onClick={() => handleToggleAll(true)}
      >
        Finish All
      </Button>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => handleToggleAll(false)}
      >
        Start All
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleDeleteAll()}
      >
        Delete All
      </Button>
    </div>
  );
};

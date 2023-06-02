import { Button } from "@mui/material";
import { memo } from "react";

export interface ShowIncrementProps {
  increment: (factor?: number) => void;
}

// memo is not enough to avoid re-rendering, because the function is recreated
export const ShowIncrement: React.FC<ShowIncrementProps> = memo(
  ({ increment }) => {
    console.log("I was painted again :(");

    return (
      <Button variant="contained" color="primary" onClick={() => increment(5)}>
        +1
      </Button>
    );
  }
);

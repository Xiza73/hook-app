import { Button } from "@mui/material";
import { memo } from "react";

export interface ChildProps {
  factor?: number;
  increment: (factor: number) => void;
}

export const Child: React.FC<ChildProps> = memo(({ factor = 1, increment }) => {
  console.log(`+${factor} was rendered again :(`);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => increment(factor)}
    >
      +{factor}
    </Button>
  );
});

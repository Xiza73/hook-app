import { Title } from "@/components";
import { Button, Container, TextField } from "@mui/material";
import { useRef } from "react";

export const FocusScreen: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    // document.querySelector("input")?.select();
    inputRef.current?.select();
  };

  return (
    <Container className="flex flex-col items-start justify-start">
      <Title>FocusScreen works!</Title>
      <TextField
        size="small"
        className="mb-3"
        label="Name"
        inputRef={inputRef}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Focus
      </Button>
    </Container>
  );
};

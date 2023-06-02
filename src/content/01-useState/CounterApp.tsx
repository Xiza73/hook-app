import { useState } from "react";
import { Button, Container } from "@mui/material";
import { Subtitle, Title } from "@/components";

export interface CounterAppProps {}

export const CounterApp: React.FC<CounterAppProps> = ({}) => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const handleAddCounter1 = () => {
    setState({
      ...state,
      counter1: state.counter1 + 1,
    });
  };

  return (
    <Container className="mb-5">
      <Title>Counter App</Title>
      <Subtitle>Counter 1: {state.counter1}</Subtitle>
      <Subtitle>Counter 2: {state.counter2}</Subtitle>
      <Subtitle>Counter 3: {state.counter3}</Subtitle>
      <Button variant="contained" color="primary" onClick={handleAddCounter1}>
        +1
      </Button>
    </Container>
  );
};

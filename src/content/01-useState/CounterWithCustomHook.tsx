import { Subtitle, Title } from "@/components";
import { useCounter } from "@/hooks";
import { Button, Container } from "@mui/material";

export interface CounterWithCustomHookProps {}

export const CounterWithCustomHook: React.FC<
  CounterWithCustomHookProps
> = ({}) => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <Container>
      <Title>Counter with custom hook</Title>
      <Subtitle>Counter: {counter}</Subtitle>
      <div className="flex gap-4">
        <Button variant="contained" color="error" onClick={() => decrement(3)}>
          -1
        </Button>
        <Button variant="contained" color="primary" onClick={() => reset()}>
          Reset
        </Button>
        <Button variant="contained" color="success" onClick={() => increment()}>
          +1
        </Button>
      </div>
    </Container>
  );
};

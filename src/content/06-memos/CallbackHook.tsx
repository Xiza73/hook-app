import { Subtitle, Title } from "@/components";
import { Container } from "@mui/material";
import { useCallback, useState } from "react";
import { ShowIncrement, Small } from ".";

export const CallbackHook: React.FC = () => {
  const [counter, setCounter] = useState(0);

  /* const handleIncrement = () => {
    setCounter(counter + 1);
  }; */

  const handleIncrement = useCallback((factor: number = 1) => {
    setCounter((value) => value + factor);
  }, []);

  return (
    <Container>
      <Subtitle>Callback Hook</Subtitle>
      <Title>
        Counter: <Small value={counter} />
      </Title>
      <ShowIncrement increment={handleIncrement} />
    </Container>
  );
};

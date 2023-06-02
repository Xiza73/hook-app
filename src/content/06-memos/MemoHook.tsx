import { Subtitle, Title } from "@/components";
import { useCounter } from "@/hooks";
import { Button, Container } from "@mui/material";
import { useMemo, useState } from "react";
import { Small } from ".";

const heavyStuff = (iterations: number = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Here we go!");
  }

  return `${iterations} iterations done!`;
};

export const MemoHook: React.FC = () => {
  const { counter, increment } = useCounter();
  const [isOn, setIsOn] = useState(true);

  const handleToggleLight = () => {
    setIsOn(!isOn);
  };

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <Container>
      <Subtitle>Memo Hook</Subtitle>
      <Title>
        Counter: <Small value={counter} />
      </Title>
      <Subtitle>{memorizedValue}</Subtitle>
      <Button
        variant="contained"
        color="primary"
        className="mr-4"
        onClick={() => increment()}
      >
        +1
      </Button>
      <Button
        variant={isOn ? "contained" : "outlined"}
        color="secondary"
        onClick={handleToggleLight}
      >
        {isOn ? "On" : "Off"}
      </Button>
    </Container>
  );
};

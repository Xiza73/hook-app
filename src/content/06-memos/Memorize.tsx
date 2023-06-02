import { Title } from "@/components";
import { useCounter } from "@/hooks";
import { Button, Container } from "@mui/material";
import { Small } from "./components/Small";
import { useState } from "react";

export const Memorize: React.FC = () => {
  const { counter, increment } = useCounter();
  const [isOn, setIsOn] = useState(true);

  const handleToggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <Container>
      <Title>
        Counter: <Small value={counter} />
      </Title>
      <Button variant="contained" color="primary" className="mr-4" onClick={() => increment()}>
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

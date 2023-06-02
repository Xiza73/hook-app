import { Title } from "@/components";
import { Container, Divider } from "@mui/material";
import { useCallback, useState } from "react";
import { Child } from ".";

export const Parent: React.FC = () => {
  const nums = [2, 4, 6, 8, 10];
  const [factor, setFactor] = useState(0);

  const increment = useCallback((value: number) => {
    setFactor((prev) => prev + value);
  }, []);

  return (
    <Container>
      <Title>Factor: {factor}</Title>
      <Divider variant="middle" className="my-6" />
      <div className="flex gap-4">
        {nums.map((num) => (
          <Child key={num} factor={num} increment={increment} />
        ))}
      </div>
    </Container>
  );
};

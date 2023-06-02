import { CounterApp, CounterWithCustomHook } from "@/content";
import { Container, Divider } from "@mui/material";

export const UseState: React.FC = () => {
  return (
    <Container>
      <CounterApp />
      <Divider variant="middle" className="my-6" />
      <CounterWithCustomHook />
    </Container>
  );
};

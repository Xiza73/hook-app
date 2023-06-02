import { Memorize, MemoHook, CallbackHook } from "@/content";
import { Container, Divider } from "@mui/material";

export const Memo: React.FC = () => {
  return (
    <Container>
      <Memorize />
      <Divider variant="middle" className="my-6" />
      <MemoHook />
      <Divider variant="middle" className="my-6" />
      <CallbackHook />
    </Container>
  );
};

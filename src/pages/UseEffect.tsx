import { SimpleForm, CustomHookForm } from "@/content";
import { Container, Divider } from "@mui/material";

export const UseEffect: React.FC = () => {
  return (
    <Container>
      <SimpleForm />
      <Divider variant="middle" className="my-6" />
      <CustomHookForm />
    </Container>
  );
};

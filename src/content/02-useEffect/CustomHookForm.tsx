import { Title } from "@/components";
import { useForm } from "@/hooks";
import {
  FormControl,
  FormLabel,
  Button,
  TextField,
  Container,
} from "@mui/material";

export const CustomHookForm: React.FC = () => {
  const { formState, handleInputChange, handleResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const fields: {
    label: string;
    name: keyof typeof formState;
    type?: string;
  }[] = [
    {
      label: "Name",
      name: "username",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];

  return (
    <Container>
      <FormControl>
        <FormLabel>
          <Title>Custom Hook Form</Title>
        </FormLabel>
        {fields.map(({ label, name, type }) => (
          <TextField
            key={name}
            type={type}
            name={name}
            label={label}
            size="small"
            className="mb-5"
            value={formState[name]}
            onChange={handleInputChange}
          />
        ))}
        <Button variant="contained" onClick={handleResetForm}>
          Clean
        </Button>
      </FormControl>
    </Container>
  );
};

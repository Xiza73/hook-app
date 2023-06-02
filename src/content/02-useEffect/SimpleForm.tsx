import { Title } from "@/components";
import {
  FormControl,
  FormLabel,
  Button,
  TextField,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Message } from "./Message";

export interface SimpleFormProps {}

export const SimpleForm: React.FC<SimpleFormProps> = ({}) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const fields: {
    name: keyof typeof formState;
    label: string;
  }[] = [
    {
      name: "username",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
  ];

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // calls every time the component is rendered (on every change)
  /* useEffect(() => {
    console.log("Hey!");
  }); */

  // calls only once when the component is rendered
  /* useEffect(() => {
    console.log("I'm only called once!");
  }, []); */

  // calls only when the component is rendered and the formState changes
  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);

  // calls only when the component is rendered and the formState.email changes
  useEffect(() => {
    console.log("formState.email changed!");
  }, [formState.email]);

  return (
    <Container>
      <FormControl>
        <FormLabel>
          <Title>Simple Form</Title>
        </FormLabel>
        {fields.map(({ name, label }) => (
          <TextField
            key={name}
            name={name}
            label={label}
            size="small"
            className="mb-5"
            value={formState[name]}
            onChange={handleInputChange}
          />
        ))}
        <Button variant="contained">Submit</Button>
      </FormControl>
      {formState.username === "jhondoe" && <Message />}
    </Container>
  );
};

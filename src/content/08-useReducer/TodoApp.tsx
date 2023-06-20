import { Title } from "@/components";
import { Container, List } from "@mui/material";
import { useEffect, useReducer } from "react";
import {
  todoReducer,
  initialTodos,
  TodoItem,
  AddTodo,
  TodoActionsButtons,
} from ".";
import { useForm } from "@/hooks";
import { setStorage } from "@/utils";

export const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const {
    formState: { description },
    handleInputChange,
    handleResetForm,
  } = useForm({
    description: "",
  });

  useEffect(() => {
    setStorage("todos", todos);
  }, [todos]);

  const handleToggle = (id: number) => {
    dispatch({
      type: "toggleTodo",
      payload: id,
    });
  };

  const handleToggleAll = (value: boolean) => {
    dispatch({
      type: "toggleAllTodo",
      payload: value,
    });
  };

  const handleAddTodo = () => {
    if (description.length === 0) return;

    dispatch({
      type: "addTodo",
      payload: {
        id: new Date().getTime(),
        description,
        done: false,
      },
    });

    handleResetForm();
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: "deleteTodo",
      payload: id,
    });
  };

  const handleDeleteAll = () => {
    dispatch({
      type: "deleteAllTodo",
    });
  };

  return (
    <Container>
      <Title>Todo App</Title>
      <AddTodo
        handleAddTodo={handleAddTodo}
        handleChange={handleInputChange}
        name="description"
        value={description}
      />
      <List className="w-max mb-5">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </List>
      <TodoActionsButtons
        handleToggleAll={handleToggleAll}
        handleDeleteAll={handleDeleteAll}
      />
    </Container>
  );
};

import { getStorage } from "@/utils";

export interface Todo {
  id: number;
  description: string;
  done: boolean;
}

export const TodoActions = {
  ADD: "addTodo",
  DELETE: "deleteTodo",
  TOGGLE: "toggleTodo",
  TOGGLE_ALL: "toggleAllTodo",
  DELETE_ALL: "deleteAllTodo",
} as const;

type TodoActionType = (typeof TodoActions)[keyof typeof TodoActions];

type TodoActionPayloadRecord = {
  [TodoActions.ADD]: Todo;
  [TodoActions.DELETE]: number;
  [TodoActions.TOGGLE]: number;
  [TodoActions.TOGGLE_ALL]: boolean;
  [TodoActions.DELETE_ALL]: undefined;
};

type TodoActionPayload =
  | TodoActionPayloadRecord[keyof TodoActionPayloadRecord]
  | undefined;

interface TodoAction {
  type: TodoActionType;
  payload?: TodoActionPayload;
}

type TodoDispatch = (state: Todo[], payload: TodoActionPayload) => Todo[];

type TodoActionsMap = {
  [key in TodoActionType]: (
    state: Todo[],
    payload: TodoActionPayloadRecord[key]
  ) => Todo[];
};

export const initialTodos: Todo[] = getStorage<Todo>("todos");

const todoActionsMap: TodoActionsMap = {
  [TodoActions.ADD]: (state, payload) => [...state, payload],
  [TodoActions.DELETE]: (state, payload) =>
    state.filter((todo: Todo) => todo.id !== payload),
  [TodoActions.TOGGLE]: (state, payload) =>
    state.map((todo: Todo) =>
      todo.id === payload ? { ...todo, done: !todo.done } : todo
    ),
  [TodoActions.TOGGLE_ALL]: (state, payload) =>
    state.map((todo: Todo) => ({ ...todo, done: payload })),
  [TodoActions.DELETE_ALL]: () => [],
} as const;

export const todoReducer = (
  state: Todo[],
  { type, payload }: TodoAction
): Todo[] => (todoActionsMap[type] as TodoDispatch)(state, payload);

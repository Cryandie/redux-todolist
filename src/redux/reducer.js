import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  REMOVE_TODOS,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "./actions";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todos) => todos.id !== action.payload);
      return newTodos;

    case REMOVE_TODOS:
      newTodos = [...[]];

      return newTodos;

    case SHOW_COMPLETED:
      newTodos = [...state];
      if (todos.completed !== true) {
        return (
          newTodos.completed, newTodos.filter((newTodos) => newTodos.completed)
        );
      } else {
        break;
      }

    case SHOW_ACTIVE:
      newTodos = [...state];
      if (todos.completed !== false) {
        return (
          newTodos.completed, newTodos.filter((newTodos) => !newTodos.completed)
        );
      } else {
        break;
      }

    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;

        return newTodos;
      }
      break;
    default:
      return state;
  }
};

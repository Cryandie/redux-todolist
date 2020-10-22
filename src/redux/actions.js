export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODOS = "REMOVE_TODOS";
export const FILTERING_TODO = "FILTERING_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";

export function addTodo(todos) {
  return {
    type: ADD_TODO,
    payload: todos,
  };
}

export function deleteTodo(todosId) {
  return {
    type: DELETE_TODO,
    payload: todosId,
  };
}

export function removeTodos(todos) {
  return {
    type: REMOVE_TODOS,
    payload: todos,
  };
}

export function updateTodo(todos) {
  return {
    type: UPDATE_TODO,
    payload: todos,
  };
}

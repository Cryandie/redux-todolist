export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODOS = "REMOVE_TODOS";
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
export function showCompleted(todos) {
  return {
    type: SHOW_COMPLETED,
    payload: todos,
  };
}
export function showInprogress(todos) {
  return {
    type: SHOW_ACTIVE,
    payload: todos,
  };
}

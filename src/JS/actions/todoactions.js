// const addTodo = (newTodo) => {
//   return { type: "ADD_TODO", payload: newTodo };

import { ADD_TODO } from "../actionsTypes/todotypes";

// };
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload }; // ===  return { type: "ADD_TODO", payload: payload };
};

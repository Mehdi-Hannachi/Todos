import { ADD_TODO } from "../actionsTypes/todotypes";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Todo 1 ",
      isDone: false,
    },
    {
      id: 2,
      text: "Todo 2 ",
      isDone: false,
    },
    {
      id: 3,
      text: "Todo 3 ",
      isDone: false,
    },
  ],
};

// const todoreducer = (state = initialState, action) => {
// switch (action.type) {
const todoreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };

    default:
      return state;
  }
};

export default todoreducer;

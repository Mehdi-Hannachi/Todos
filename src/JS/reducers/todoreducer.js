const initialState = {
  todos: [],
};

// const todoreducer = (state = initialState, action) => {
// switch (action.type) {
const todoreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default todoreducer;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../JS/actions/todoactions";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    let newTodo = {
      text: todoText,
      id: Math.random(),
      isDone: false,
    };

    if (todoText === "") return alert("Please enter a valid text");

    dispatch(addTodo(newTodo));

    setTodoText("");
  };

  return (
    <div>
      <h1>My Todos</h1>
      <input
        placeholder="Enter todo text"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={() => add()}>ADD</button>
    </div>
  );
};

export default AddTodo;

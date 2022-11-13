import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos.jsx";
import { addTodo, toggleTodo } from "../modules/todos.js";

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  return <Todos todos={todos} onToggle={onToggle} onCreate={onCreate} />;
}

export default TodosContainer;

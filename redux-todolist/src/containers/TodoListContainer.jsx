import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, remove, toggle } from "../modules/todos.js";
import TodoList from "../components/TodoList.jsx";
import TodoCreaet from "../components/TodoCreaet.jsx";
import TodoHead from "../components/TodoHead.jsx";

function TodoListContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onCreate = useCallback((text) => dispatch(create(text)), [dispatch]);
  return (
    <>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoCreaet onCreate={onCreate} />
    </>
  );
}

export default TodoListContainer;

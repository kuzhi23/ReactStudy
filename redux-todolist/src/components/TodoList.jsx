import React from "react";
import { TodoListBlock } from "../styles/TodoStyles";
import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          text={todo.text}
          done={todo.done}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
          id={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default React.memo(TodoList);

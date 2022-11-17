import React from "react";
import { TodoHeadBlock } from "../styles/TodoStyles.js";

function TodoHead({ todos }) {
  const doneList = todos.filter((todo) => !todo.done).length;
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {doneList}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

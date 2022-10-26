import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 24px;
  padding-left: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  h1 {
    margin: 0;
    font-size: 32px;
    color: #343a40;
  }

  .day {
    margin-top: 8px;
    color: #868e96;
    font-size: 24px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 16px;
    margin-top: 32px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

import React from "react";
import {
  CheckCircle,
  Remove,
  Text,
  TodoItemBlock,
} from "../styles/TodoStyles.js";
import { MdDelete, MdDone } from "react-icons/all";

function TodoItem({ done, text, onRemove, onToggle, id }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => onRemove(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);

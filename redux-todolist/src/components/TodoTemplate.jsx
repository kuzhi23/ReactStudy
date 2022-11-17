import React from "react";
import { TodoTemplateBlock } from "../styles/TodoStyles";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

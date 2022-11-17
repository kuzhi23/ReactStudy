import React, { useState } from "react";
import {
  CircleButton,
  Input,
  InsertForm,
  InsertFormPositioner,
} from "../styles/TodoStyles";
import { MdAdd } from "react-icons/all";

function TodoCreaet({ onCreate }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  const onToggle = () => setOpen(!open);
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력후 Enter를 누르세요"
              value={text}
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreaet);

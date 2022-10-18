import React, { useContext, useRef, useState } from "react";
import { UserDispatch } from "../App";
import useInputs from "../hook/useInputs";

function CreateUser() {
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);
  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username: form.username,
        email: form.email,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={form.username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={form.email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);

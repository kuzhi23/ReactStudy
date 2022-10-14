import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import InputSample from "./component/InputSample";
import Counter from "./component/Counter";
import UserList from "./component/UserList";
import { userData } from "./sampleData/smaple";
import CreateUser from "./component/CreateUser";
import useInputs from "./hook/useInputs";

function countActiveUsers(users) {
  // console.log("활성 사용자 수를 세는중...");
  console.log("렌더?");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: userData,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled Error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(
    (id) =>
      dispatch({
        type: "TOGGLE_USER",
        id,
      }),
    []
  );
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      {/*<Counter />*/}
      {/*<br />*/}
      {/*<InputSample />*/}
      {/*<br />*/}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

import React, { useCallback, useMemo, useRef, useState } from "react";
import InputSample from "./component/InputSample";
import Counter from "./component/Counter";
import UserList from "./component/UserList";
import { userData } from "./sampleData/smaple";
import CreateUser from "./component/CreateUser";

function countActiveUsers(users) {
  // console.log("활성 사용자 수를 세는중...");
  console.log("렌더?");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState(userData);

  const { username, email } = inputs;

  const onChane = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    setUsers((users) => [
      ...users,
      {
        id: nextId.current,
        username,
        email,
      },
    ]);

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
    console.log(users);
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
    console.log(users);
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      {/*<Counter />*/}
      {/*<br />*/}
      {/*<InputSample />*/}
      {/*<br />*/}
      <CreateUser
        onChange={onChane}
        username={username}
        email={email}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

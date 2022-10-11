import React, { useRef, useState } from "react";
import InputSample from "./component/InputSample";
import Counter from "./component/Counter";
import UserList from "./component/UserList";
import { userData } from "./sampleData/smaple";
import CreateUser from "./component/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const [users, setUsers] = useState(userData);

  const { username, email } = inputs;
  const onChane = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    // const user = {
    //   id: nextId.current,
    //   username,
    //   email,
    // };
    setUsers([
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
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log(users);
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <Counter />
      <br />
      <InputSample />
      <br />
      <CreateUser
        onChange={onChane}
        username={username}
        email={email}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;

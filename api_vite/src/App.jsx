import React from "react";
import Users from "./components/Users.jsx";
import AsyncReducer from "./components/AsyncReducer.jsx";
import { UsersProvider } from "./components/UsersContext";

function App() {
  return (
    <UsersProvider>
      <AsyncReducer />
    </UsersProvider>
  );
}

export default App;

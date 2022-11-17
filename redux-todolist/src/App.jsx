import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate.jsx";
import TodoListContainer from "./containers/TodoListContainer.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoListContainer />
      </TodoTemplate>
    </>
  );
}

export default App;

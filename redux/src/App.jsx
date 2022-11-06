import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter.jsx";
import CounterContainer from "./containers/CounterContainer.jsx";
import TodosContainer from "./containers/TodosContainer.jsx";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
}

export default App;

import React from "react";
import CounterContainer from "./containers/CounterContainer.jsx";
import TodoContainer from "./containers/TodoContainer.jsx";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;

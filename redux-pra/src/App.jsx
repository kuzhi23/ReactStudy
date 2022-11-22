import React from "react";
import CounterContainer from "./containers/CounterContainers";
import TodosContainer from "./containers/TodosContainer.jsx";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <div
        style={{
          margin: "16px",
          padding: "4px",
          width: "46px",
          background: "black",
          color: "white",
          fontSize: "8px",
          borderRadius: "2px",
        }}
      >
        강아지 정보
      </div>
    </div>
  );
}

export default App;

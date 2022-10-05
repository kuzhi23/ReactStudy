import React from "react";

function Hello({ name = "한준", color, isSpecial }) {
  return (
    <div style={{ color: color }}>
      {isSpecial && <b>*</b>}`React Study Start' {name}
    </div>
  );
}

export default Hello;

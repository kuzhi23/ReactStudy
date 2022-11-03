import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Videos() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handelChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id:"
          value={text}
          onChange={handelChange}
        />
      </form>
    </div>
  );
}

export default Videos;

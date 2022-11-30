import React from "react";
import PostListContainer from "./containers/PostListContainer.jsx";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListContainer />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;

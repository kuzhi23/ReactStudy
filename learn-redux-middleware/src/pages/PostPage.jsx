import React from "react";
import PostContainer from "../containers/PostContainer.jsx";
import { useParams } from "react-router-dom";
function PostPage() {
  const { id } = useParams();

  const postId = parseInt(id, 10);
  return <PostContainer postId={postId} />;
}
export default PostPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../modules/posts.js";
import PostList from "../components/PostList.jsx";

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div> 로딩중</div>;
  if (error) return <div>에러발생!</div>;
  if (!data) return <div>데이터 없음</div>;

  return (
    <div>
      <PostList posts={data} />
      <div style={{ width: "100%", height: "100%", background: "yellow" }}>
        <img src="KakaoTalk_Photo_2022-11-24-08-37-08.png" alt="" />
      </div>
    </div>
  );
}

export default PostListContainer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getUsers } from "../modules/sample.jsx";
import Sample from "../components/Sample.jsx";

function SampleContainer() {
  const dispatch = useDispatch();
  const { post, users } = useSelector((state) => state.sample);
  const loadingPost = useSelector((state) => state.loading["sample/GET_POST"]);
  const loadingUsers = useSelector((state) => state.loading["sample/GET_POST"]);

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
  }, [getPost, getUsers]);

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
}

export default SampleContainer;

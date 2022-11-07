import * as postsAPI from '../api/post.js';
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from '../lib/asyncUtills.jsx';

const GET_POSTS = 'GET_POSTS'; // 특정 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 특정 요청이 성공 로딩이 끝낫다
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 특정 요청 에러

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};
const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostReducer = handleAsyncActions(GET_POST, 'post');
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    default:
      return state;
  }
}

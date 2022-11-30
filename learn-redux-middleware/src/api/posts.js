const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

//{ id, title, body }

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨를 배워 봅시다.",
    body: "리덕스 미들웨어를 직접 만들어 보면 이해하기가 쉽다.",
  },
  {
    id: 2,
    title: "redux-thunk를 배워 봅시다.",
    body: "redux-thunk를 직접 만들어 보면 이해하기가 쉽다.",
  },
  {
    id: 3,
    title: "redux-saga 미들웨를 배워 봅시다.",
    body: "redux-saga 미들웨어를 직접 만들어 보면 이해하기가 쉽다.",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};

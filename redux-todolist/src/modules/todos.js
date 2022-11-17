/*액션 타입 정의 */
const CREATE = "todos/CREATE";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

/* 액션 함수 정의 */
let nextId = 4;
export const create = (text) => ({
  type: CREATE,
  todo: { id: nextId++, text, done: false },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

/*초기 상태*/

const initialState = [
  { id: 1, text: "리덕스 공부", done: true },
  { id: 2, text: "리덕스 기초", done: false },
  { id: 3, text: "리덕스 심화", done: false },
];

/*리듀서 생성*/
function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default todos;

import { useState, useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CANGE_INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET":
      return {
        username: "",
        email: "",
      };
  }
}
function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CANGE_INPUT",
      name,
      value,
    });
  }, []);
  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
    });
  });
  return [form, onChange, reset];
}
export default useInputs;

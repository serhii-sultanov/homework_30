import { LOADING, FAILED, RECEIVED } from "./actionTypes";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING });

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch({ type: RECEIVED, payload: data });
    console.log("getState: ", getState());
  } catch {
    dispatch({ type: FAILED, payload: "Something went wrong" });
  }
};

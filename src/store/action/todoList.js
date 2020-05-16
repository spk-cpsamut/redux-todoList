import { actionTypes } from "./actionTypes.js";
import axios from "../../config/axios";

const putUpdateTodo = (checked, id) => {
  return {
    type: actionTypes.UPDATE_TODO,
    id,
    checked,
  };
};

const postNewTodo = () => {
  return {
    type: actionTypes.ADD_NEW_TODO,
  };
};

const updateGetTodoList = (data) => {
  return {
    type: actionTypes.GET_TODO_LIST_FROM_DATABASE,
    newTodoList: data,
  };
};

export const updateTodo = (targetId, checked) => {
  console.log("pass update todo");
  return (dispatch) => {
    dispatch(putUpdateTodo(targetId, checked));
  };
};

export const changeInputHeader = (value) => {
  return {
    type: actionTypes.CHANGE_INPUT_HEADER,
    input: value,
  };
};

export const changeInputFooter = (value) => {
  return {
    type: actionTypes.CHANGE_INPUT_DES,
    input: value,
  };
};

export const addNewTodo = (header, description) => {
  return async (dispatch) => {
    const newTodo = await axios.post("/todo/add-todo", { header, description });
    dispatch(postNewTodo());
  };
};

export const goBackDoing = (id) => {
  return async (dispatch) => {
    await axios.patch("/todo/goto-doing", { id });
    dispatch({ type: actionTypes.GO_BACK_DOING });
  };
};

export const getTodoList = () => {
  console.log("hello");

  return async (dispatch) => {
    const result = await axios.get("todo");
    console.log(result);
    dispatch(updateGetTodoList(result.data));
  };
};

export const goToDone = (id) => {
  return async (dispatch) => {
    await axios.patch("/todo/goto-done", { id });
    dispatch({
      type: actionTypes.GO_TO_DONE,
    });
  };
};

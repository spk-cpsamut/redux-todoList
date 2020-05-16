import {
  updateTodo,
  changeInputHeader,
  changeInputFooter,
  addNewTodo,
  goToDone,
  goBackDoing,
  getTodoList,
} from "./todoList";

import { login, stayMember } from "./user";

export const actionCreators = {
  updateTodo,
  changeInputHeader,
  changeInputFooter,
  addNewTodo,
  goToDone,
  goBackDoing,
  login,
  getTodoList,
  stayMember,
};

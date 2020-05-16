import { actionTypes } from "../action/actionTypes";

const initialState = {
  header: "",
  description: "",
  todoList: [],
};

const updateState = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const updateInputHeader = (state, action) => {
  const newHead = { header: action.input };

  return updateState(state, newHead);
};

const updateInputDes = (state, action) => {
  const newDes = { description: action.input };

  return updateState(state, newDes);
};

const addNewTodo = (state, action) => {
  const newTodo = {
    id: new Date(),
    header: state.header,
    description: state.description,
    checked: false,
    done: false,
  };
  const newState = {
    header: "",
    description: "",
    todoList: state.todoList.concat(newTodo),
  };

  return updateState(state, newState);
};

const upDateTodo = (state, action) => {
  const newTodoList = [...state.todoList];
  const targetIndex = newTodoList.findIndex((todo) => todo.id == action.id);
  newTodoList[targetIndex] = {
    ...newTodoList[targetIndex],
    checked: action.checked,
  };
  const newState = { todoList: newTodoList };

  return updateState(state, newState);
};

const goToDone = (state, action) => {
  const NewTodoList = state.todoList.map((todo) => {
    if (todo.checked) {
      return {
        ...todo,
        checked: false,
        done: true,
      };
    }
    return todo;
  });

  const newState = { todoList: NewTodoList };

  return updateState(state, newState);
};

const upDateGoBackToDoings = (state, action) => {
  const todoListUpdateReverse = [...state.todoList];
  const targetToReverse = state.todoList.findIndex(
    (todo) => todo.id === action.id
  );
  todoListUpdateReverse[targetToReverse] = {
    ...todoListUpdateReverse[targetToReverse],
    done: false,
  };

  const newState = { todoList: todoListUpdateReverse };

  return updateState(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_HEADER:
      return updateInputHeader(state, action);

    case actionTypes.CHANGE_INPUT_DES:
      return updateInputDes(state, action);

    case actionTypes.ADD_NEW_TODO:
      return addNewTodo(state, action);

    case actionTypes.UPDATE_TODO:
      return upDateTodo(state, action);

    case actionTypes.GO_TO_DONE:
      return goToDone(state, action);

    case actionTypes.GO_BACK_DOING:
      return upDateGoBackToDoings(state, action);

    case actionTypes.GET_TODO_LIST_FROM_DATABASE:
      return updateState(state, { todoList: action.newTodoList });
  }
  return state;
};

export default reducer;

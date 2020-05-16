import { actionTypes } from "../action/actionTypes";

const initialState = {
  statusUser: "guest",
};

const changeGuestToMember = (state, action) => {
  if (action.token) {
    localStorage.setItem("ACCESS_TOKEN", action.token);
  }

  return updateState(state, { statusUser: "member" });
};

const updateState = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GUEST_TO_MEMBER:
      return changeGuestToMember(state, action);

    case actionTypes.STAY_TO_MEMBER:
      return updateState(null, { statusUser: "member" });
  }

  return state;
};

export default reducer;

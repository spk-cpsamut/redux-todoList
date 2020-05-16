import { actionTypes } from "./actionTypes";
import axios from "../../config/axios";

const partLogin = (token) => {
  if (token) {
    return {
      type: actionTypes.CHANGE_GUEST_TO_MEMBER,
      token: token,
    };
  }
};

export const login = (username, password) => {
  const body = { username, password };
  return async (dispatch) => {
    try {
      const result = await axios.post("user/login", body);

      dispatch(partLogin(result.data));
    } catch (err) {
      console.log("username or password is wrong");
    }
  };
};

const partStayMember = () => {
  return {
    type: actionTypes.STAY_TO_MEMBER,
  };
};

export const stayMember = () => {
  return (dispatch) => {
    dispatch(partStayMember());
  };
};

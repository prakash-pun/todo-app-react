import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users: any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error: any) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        console.log(users);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

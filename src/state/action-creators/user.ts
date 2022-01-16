import axios from "axios";
import { Dispatch } from "redux";
import { UserActionTypes } from "../action-types/user";
import { User, FetchUserAction } from "../actions/user";

// Temporarily testing
const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<FetchUserAction>) => {
    dispatch({
      type: UserActionTypes.FETCH_USER,
    });

    try {
      const response = await axios.get<User>(`${url}/${id}`);

      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      let errMsg = "Failed to do something exceptional";
      if (err instanceof Error) errMsg = err.message;

      dispatch({
        type: UserActionTypes.FETCH_USER_FAILURE,
        payload: errMsg,
      });
    }
  };
};

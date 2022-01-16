import { UserActionTypes } from "../action-types/user";

export interface User {
  id: number;
  username: string;
  email: string;
}

interface FetchUser {
  type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}

interface FetchUserFailure {
  type: UserActionTypes.FETCH_USER_FAILURE;
  payload: string;
}

export type FetchUserAction = FetchUser | FetchUserSuccess | FetchUserFailure;

// combine all user actions
export type UserAction = FetchUserAction;

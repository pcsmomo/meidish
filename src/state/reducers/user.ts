import { UserActionTypes } from "../action-types/user";
import { User, UserAction } from "../actions/user";

interface userState {
  loading: boolean;
  error: string | null;
  user: User | null;
}

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const userReducer = (
  state: userState = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { loading: true, error: null, user: null };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case UserActionTypes.FETCH_USER_FAILURE:
      return { loading: false, error: action.payload, user: null };
    default:
      return state;
  }
};

export default userReducer;

import {
  GET_USERS_REQUEST,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} from "./usersActions";

export const initalState = {
  isPending: false,
  error: "",
  data: [],
};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isPending: true, error: "" };
    case GET_USERS_FAILURE:
      return { ...state, isPending: false, error: action.payload, data: [] };
    case GET_USERS_SUCCESS:
      return { ...state, isPending: false, error: "", data: action.payload };
    default:
      return state;
  }
};

export default usersReducer;

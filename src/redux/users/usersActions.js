import axios from "axios";

export const startGetUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get(`http://localhost:4000/graphql?query={customers{name,age}}`)
      .then((res) => {
        console.log("back Here", res.data.data.customers);
        dispatch(getUsersSuccess(res.data.data.customers));
      })
      .catch((error) => {
        dispatch(getUsersFailure(error));
      });
  };
};

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
    payload: {},
  };
};

export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    payload: error.message,
  };
}

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export function getUsersSuccess(res) {
  console.log("res", { res });
  return {
    type: GET_USERS_SUCCESS,
    payload: res,
  };
}

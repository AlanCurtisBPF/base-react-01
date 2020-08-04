import { UPDATE_USER } from "./userActions";

export const initalState = {
  name: "Johny",
  email: "J@gmail.com",
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;

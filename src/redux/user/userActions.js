export const UPDATE_USER = "UPDATE_USER";

export const updateUser = (key, value) => {
  return {
    type: UPDATE_USER,
    payload: { [key]: value },
  };
};

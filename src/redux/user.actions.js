import userTypes from "./user.types";

export const userLoaded = (user) => ({
  type: userTypes.USER_LOADED,
  payload: user,
});

import { CLEAR__USER, SET__USER } from "./authTypes";

const init = {
  user: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case SET__USER:
      return {
        user: action.payload,
      }
    case CLEAR__USER:
      return {
        user: null,
      }

    default:
      return state;
  }
};


export default authReducer
import { types } from "../types/types";

export const AuthReducer = (state, action) => {

  switch (action.type) {
    case types.login:
      if (action.payload.user === 'diego' && action.payload.pass === '123') {
        return {
          ...state,
          logged: true
        }
      } else {
        return {
          ...state,
          logged: false
        }
      }

    case types.logout:

      return {
        ...state,
        logged: false
      }
    default:
      return state;
  }
}

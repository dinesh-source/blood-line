import { reducerCases } from "./Constants";

export const initialState = {
  isValidate: false,
  isLoggedIn: false,
  email: "",
  password: "",
  phone: "",
  name: "",
  profilePopUp: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_IS_VALID:
      return {
        ...state,
        isValidate: action.isValidate,
      };
    case reducerCases.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case reducerCases.SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case reducerCases.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case reducerCases.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case reducerCases.SET_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case reducerCases.SET_PROFILE_POPUP:
      return {
        ...state,
        profilePopUp: action.profilePopUp,
      };
    default:
      return state;
  }
};

export default reducer;

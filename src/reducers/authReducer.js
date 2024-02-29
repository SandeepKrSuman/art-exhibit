export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload.status };
    case "SET_AUTH":
      return {
        ...state,
        isLoading: false,
        isLogin: localStorage.getItem("accessToken") ? true : false,
      };
    case "LOGOUT":
      return { ...state, isLoading: false, isLogin: false };
    default:
      return state;
  }
};

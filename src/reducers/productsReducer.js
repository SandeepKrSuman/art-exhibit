export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload.status };
    case "ADD_PRODUCTS":
      return { ...state, isLoading: false, products: action.payload };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "BY_CATEGORY":
      return { ...state, category: action.payload };
    case "BY_PRICE":
      return { ...state, price: action.payload };
    case "OUT_OF_STOCK":
      return { ...state, outofstock: !state.outofstock };
    case "BY_RATING":
      return { ...state, rating: parseInt(action.payload) };
    case "CLEAR_FILTER":
      return {
        searchQuery: "",
        category: "",
        price: "",
        outofstock: false,
        rating: 0,
      };
    default:
      return state;
  }
};

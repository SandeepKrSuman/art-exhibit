export const bagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BAG":
      return [...state, { ...action.payload, qty: 1 }];
    case "REMOVE_FROM_BAG":
      return state.filter((item) => item.id !== action.payload.id);
    case "CHANGE_ITEM_QTY":
      return state.filter((item) =>
        item.id === action.payload.id
          ? (item.qty = parseInt(action.payload.qty))
          : item.qty
      );
    case "CLEAR_BAG":
      return [];
    default:
      return state;
  }
};

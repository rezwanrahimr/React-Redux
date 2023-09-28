import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = { cart: [] };
export const productReducer = (state = initialState, action) => {
  const cartItem = state.cart.find((item) => item.id === action.payload.id);
  const cartItemFilter = state.cart.filter(
    (item) => item.id !== action.payload.id
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (cartItem?.quantity) {
        return {
          ...state,
          cart: [
            ...cartItemFilter,
            { ...action.payload, quantity: cartItem.quantity + 1 },
          ],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_TO_CART:
      if (cartItem?.quantity > 1) {
        return {
          ...state,
          cart: [
            ...cartItemFilter,
            { ...action.payload, quantity: cartItem.quantity - 1 },
          ],
        };
      }
      return {
        ...state,
        cart: [...cartItemFilter],
      };

    default:
      state;
  }
};

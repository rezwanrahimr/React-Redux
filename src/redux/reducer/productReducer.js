import { ADD_TO_CART, PRODUCT_LOADING, PRODUCT_LOADING_ERROR, PRODUCT_LOADING_SUCCESS, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = { loading: false, cart: [], products: [] };
export const productReducer = (state = initialState, action) => {
  const cartItem = state.cart?.find((item) => item.id === action.payload.id);
  const cartItemFilter = state.cart?.filter(
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

    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true
      }


    case PRODUCT_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }


    case PRODUCT_LOADING_ERROR:
      return {
        ...state,
        loading: false,

      }

    default:
      return state;
  }
};

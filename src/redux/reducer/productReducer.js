import { ADD_TO_CART, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = { cart: [] };
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const findProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      console.log(findProduct);
      if (!findProduct) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        const filterProduct = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        console.log(findProduct.quantity);
        return {
          ...state,
          cart: [
            ...filterProduct,
            { ...action.payload, quantity: findProduct.quantity + 1 },
          ],
        };
      }
    // return {
    //   ...state,
    //   cart: [...state.cart, action.payload],
    // };

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };

    default:
      state;
  }
};

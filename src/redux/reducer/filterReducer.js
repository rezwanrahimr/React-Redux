import { INTEL } from "../actionTypes/filterActionTypes";

const initialState = {
  brands: [],
  stock: false,
};
export const FilterReducer = (state = initialState, action) => {
  const brand = state.brands.filter((brand) => brand.includes(action.payload));
  switch (action.type) {
    case INTEL:
      if (!brand) {
        return {
          ...state,
          brands: [...state.brands, "intel"],
        };
      } else {
        return {
          ...state,
          brands: state.brands.filter(
            (brand) => !brand.includes(action.payload)
          ),
        };
      }

    //     break;

    default:
      return state;
  }
};

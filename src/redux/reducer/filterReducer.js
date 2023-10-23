import { AMD, INTEL } from "../actionTypes/filterActionTypes";

const initialState = {
  brands: [],
  stock: false,
};
export const FilterReducer = (state = initialState, action) => {
  const findBrand = state.brands.find((brand) =>
    brand.includes(action.payload)
  );
  const filterBrand = state.brands.filter(
    (brand) => !brand.includes(action.payload)
  );

  switch (action.type) {
    case INTEL:
      if (findBrand) {
        return {
          ...state,
          brands: filterBrand,
        };
      } else {
        return {
          ...state,
          brands: [...state.brands, action.payload],
        };
      }

    case AMD:
      if (findBrand) {
        return {
          ...state,
          brands: filterBrand,
        };
      } else {
        return {
          ...state,
          brands: [...state.brands, action.payload],
        };
      }

    default:
      return state;
  }
};

import { PRODUCT_LOADING, PRODUCT_LOADING_SUCCESS } from "../../actionTypes/actionTypes";

const ProductLoading = () => {
    return async (dispatch, getState) => {
        dispatch({ type: PRODUCT_LOADING })
        const response = await fetch("product.json")
        const data = await response.json()
        if (data) {
            dispatch({ type: PRODUCT_LOADING_SUCCESS, payload: data })
        }

    }
}
export default ProductLoading;
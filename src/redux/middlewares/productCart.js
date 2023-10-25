
const ProductCart = (store) => (next) => (action) => {

    console.log('store', store.getState());
    console.log('action', action)


    return next(action)
}
export default ProductCart;
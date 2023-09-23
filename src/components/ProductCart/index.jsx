import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
} from "../../redux/actionTypes/actionTypes";
import { useLocation } from "react-router-dom";

const ProductCart = ({ productData }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={productData?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productData?.model}</h2>
          {productData?.keyFeature?.map((feature) => (
            <p>{feature}</p>
          ))}

          <p className="font-semibold">Rating : {productData?.rating}</p>
          <p className="font-semibold">Price : {productData?.price}</p>
          <div className="card-actions justify-end">
            {!pathname.includes("cart") ? (
              <>
                <button
                  className="btn"
                  onClick={() =>
                    dispatch({ type: ADD_TO_CART, payload: productData })
                  }
                >
                  Add to cart
                </button>

                <button className="btn">Buy Now</button>
              </>
            ) : (
              <button
                className="btn"
                onClick={() =>
                  dispatch({ type: REMOVE_TO_CART, payload: productData })
                }
              >
                Remove to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart;

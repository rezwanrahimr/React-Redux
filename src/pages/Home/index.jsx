import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { AMD, INTEL, IN_STOCK } from "../../redux/actionTypes/filterActionTypes";
import ProductLoading from "../../redux/thunk/ProductThunk/ProductLoading";

const Home = () => {
  const stateValue = useSelector((state) => state);
  const {products} = stateValue.product;
  const { brands, stock } = stateValue.filter;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductLoading())
  }, []);

  let content;

  if (products.length) {
    content = products?.map((product) => (
      <ProductCart key={product.id} productData={product}></ProductCart>
    ))
  }

  if (products.length && (stock || brands.length)) {
    content = products.filter(product => {
      if (stock) {
        return product.status === true;
      }
      return product
    }).filter(product => {
      if (brands.length) {
        return brands.includes(product.brand);
      }
      return product
    }).map((product) => (
      <ProductCart key={product.id} productData={product}></ProductCart>
    ))
  }

  return (
    <>
      <section className="flex justify-end m-3">
        <div className="btn-group">
          <button className={`btn ${stock === true ? 'btn-active' : ""}`} onClick={() => dispatch({ type: IN_STOCK })}>Stock</button>
          <button
            className={`btn ${brands.find((brand) => brand.includes("intel"))
              ? "btn-active"
              : ""
              }`}
            onClick={() => dispatch({ type: INTEL, payload: "intel" })}
          >
            Intel
          </button>
          <button
            className={`btn ${brands.find((brand) => brand.includes("amd")) ? "btn-active" : ""
              }`}
            onClick={() => dispatch({ type: AMD, payload: "amd" })}
          >
            AMD
          </button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {content}
      </section>
    </>
  );
};

export default Home;

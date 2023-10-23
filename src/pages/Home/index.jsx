import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { AMD, INTEL } from "../../redux/actionTypes/filterActionTypes";

const Home = () => {
  const [products, setProducts] = useState([]);
  const stateValue = useSelector((state) => state);
  const { brands, stock } = stateValue.filter;
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    let updatePoduct = [];
    if (brands?.length > 0) {
      brands.forEach((element) => {
        const filterProduct = products?.filter((product) =>
          product.brand.includes(element)
        );
        updatePoduct.push(...filterProduct);
      });
      setProducts(updatePoduct);
    }
  }, [brands?.length, stock]);

  return (
    <>
      <section className="flex justify-end m-3">
        <div className="btn-group">
          <button className="btn ">Stock</button>
          <button
            className={`btn ${
              brands.find((brand) => brand.includes("intel"))
                ? "btn-active"
                : ""
            }`}
            onClick={() => dispatch({ type: INTEL, payload: "intel" })}
          >
            Intel
          </button>
          <button
            className={`btn ${
              brands.find((brand) => brand.includes("amd")) ? "btn-active" : ""
            }`}
            onClick={() => dispatch({ type: AMD, payload: "amd" })}
          >
            AMD
          </button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCart key={product.id} productData={product}></ProductCart>
        ))}
      </section>
    </>
  );
};

export default Home;

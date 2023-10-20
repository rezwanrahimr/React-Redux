import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";
import { useDispatch } from "react-redux";
import { INTEL } from "../../redux/actionTypes/filterActionTypes";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="flex justify-end m-3">
        <div className="btn-group">
          <button className="btn btn-active">Stock</button>
          <button
            className="btn"
            onClick={() => dispatch({ type: INTEL, payload: "intel" })}
          >
            Intel
          </button>
          <button className="btn">AMD</button>
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

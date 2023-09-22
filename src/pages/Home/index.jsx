import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductCart key={product.id} productData={product}></ProductCart>
        ))}
      </section>
    </>
  );
};

export default Home;

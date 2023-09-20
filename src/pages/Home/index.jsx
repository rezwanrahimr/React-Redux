import { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return <>
     {
      products?.map(product =>  <ProductCart productData={product}></ProductCart>)
     }
  </>;
};

export default Home;

import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart);
  console.log(cartItems);

  return (
    <div className="grid grid-cols-3 gap-4">
      {cartItems &&
        cartItems
          ?.sort((a, b) => a.id - b.id)
          .map((product) => (
            <ProductCart key={product.id} productData={product}></ProductCart>
          ))}
    </div>
  );
};

export default Cart;

import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";

const Cart = () => {
  const cartItems = useSelector((state) => state);
  console.log(cartItems);

  return (
    <div className="grid grid-cols-3 gap-4">
      {cartItems?.cart &&
        cartItems?.cart?.map((product) => (
          <ProductCart key={product.id} productData={product}></ProductCart>
        ))}
    </div>
  );
};

export default Cart;

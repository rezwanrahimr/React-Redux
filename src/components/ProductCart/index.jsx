const ProductCart = ({productData}) => {
  console.log(productData)
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={productData?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productData?.model}</h2>
          {
            productData?.keyFeature.map(feature => <p>{feature}</p>)
          }
          
          <p className="font-semibold">Rating : {productData?.rating}</p>
          <p className="font-semibold">Price : {productData?.price}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCart;

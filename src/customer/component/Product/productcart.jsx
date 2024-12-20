/* eslint-disable react/prop-types */
import "../product/productcart.css"; 
export const ProductCart = ({ product }) => {
  return (
    <div className="productcart max-w-[14rem] m-2 transition-all cursor-pointer shadow-lg rounded-lg overflow-hidden">
      <div className="h-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="Product"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p> 
          <p>{product.title}</p> 
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-bold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p> 
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p> 
        </div>
      </div>
    </div>
  );
};

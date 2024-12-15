import "../product/productcart.css";
export const ProductCart = () => {
  return (
    <div className="productcart max-w-[15rem] m-3 transition-all cursor-pointer shadow-lg rounded-lg overflow-hidden">
  <div className="h-[20rem]">
    <img
      className="h-full w-full object-cover object-left-top"
      src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70"
      alt="Product"
    />
  </div>
  <div className="textPart bg-white p-3">
    <div>
      <p className="font-bold opacity-60">Universaloutfit</p>
      <p>Casual puff sleeve solid women white top</p>
    </div>
    <div className="flex items-center space-x-2">
      <p className="font-bold">₹199</p>
      <p className="line-through opacity-50">₹1999</p>
      <p className="text-green-600 font-semibold">70% off</p>
    </div>
  </div>
</div>

  );
};

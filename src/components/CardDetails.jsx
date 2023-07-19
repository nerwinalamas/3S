import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const CardDetails = () => {
  const { isData, handleAddToCart } = useContext(ProductContext);

  const { id } = useParams();
  const product = isData[id - 1];

  return (
    <div className="h-screen flex justify-center items-center flex-col md:mx-auto">
      <div className="flex-1 w-80 md:max-w-5xl mx-1 py-3 overscroll-none md:flex md:justify-center md:items-center md:w-screen md:px-10 md:gap-5">
        <div className="w-full h-80 md:flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-80 m-auto"
          />
        </div>
        <div className="pt-5 max-h-auto md:flex-1 ">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            {product.title}
          </h1>
          <p className="text-xs text-slate-500 md:text-sm">
            (Rating: {product.rating.rate}/5 - {product.rating.count} sold)
          </p>

          <p className="h-auto max-h-40 mt-4 font-thin text-sm overflow-y-auto md:text-md md:font-normal md:overflow-y-auto md:h-40">
            {product.description}
          </p>

          <div className="hidden md:w-full md:flex md:justify-between md:mt-4 md:bottom-0">
            <p className="text-3xl font-medium text-red-700">
              ${product.price}
            </p>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="w-auto h-10 px-4 py-2 rounded bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-solid hover:border-2 hover:cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center h-16 p-2 bottom-0 sticky font-semibold bg-white drop-shadow md:hidden">
        <p className="text-3xl text-red-700">${product.price}</p>
        <button
          onClick={() => handleAddToCart(product.id)}
          className="w-auto h-10 px-4 py-2 rounded bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-solid hover:border-2 hover:cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardDetails;

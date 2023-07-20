import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Nav = () => {
  const { handleTotalQuantity } = useContext(ProductContext);

  return (
    <div className="flex w-screen justify-between items-center h-14 px-10 z-10 sticky top-0 bg-white">
      <Link
        to={`/`}
        title="Tripple S"
        className="font-bold text-2xl md:text-3xl"
      >
        3S
      </Link>
      <Link to={`/cart`} className="flex">
        <AiOutlineShoppingCart className="text-xl mx-1 md:text-2xl" />
        {<p>( {handleTotalQuantity()} )</p>}
      </Link>
    </div>
  );
};

export default Nav;

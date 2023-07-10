import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="flex w-screen justify-between items-center h-14 bg-white px-10 sticky top-0">
      <a className="font-bold text-2xl md:text-3xl" title="Tripple S" href="/">3S</a>
      <Link to={`/`}>
        <AiOutlineShoppingCart className="text-xl md:text-2xl"/>
      </Link>
    </div>
  );
};

export default Nav;

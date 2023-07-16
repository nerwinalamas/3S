import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleRemoveAll } = useContext(ProductContext);

  const totalCost = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="flex flex-col justify-start items-center h-auto pt-10 gap-2 md:flex-row md:justify-center md:items-start">
      <div>
        {cart.length === 0 ? (
          <p>Empty Cart</p>
        ) : (
          cart.map((items, index) => {
            return (
              <div key={items.id} className="w-80 h-40 flex gap-4 px-2 ">
                <div>
                  <img
                    src={items.image}
                    alt={items.title}
                    className="h-full object-contain"
                  />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <p className="text-sm">{items.title} </p>
                  <p className="text-lg text-red-700 font-medium">
                    ${items.price}{" "}
                  </p>
                  {/* <div className="flex items-center justify-start pl-10 gap-5">
                    <p>-</p>
                    <p>1</p>
                    <p>+</p>
                  </div> */}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div>
        {cart.length > 0 && (
          <div className="h-52 w-80 flex flex-col justify-center items-center gap-2 my-5 md:mt-10">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <input
              type="text"
              placeholder="Contact no."
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <div className="w-full flex items-center justify-around font-bold my-5">
              <p>Total:</p>
              <p className="text-red-700 text-xl">${totalCost().toFixed(2)}</p>
            </div>
            <Link to={`/completed`}>
              <button
                onClick={handleRemoveAll}
                className="w-auto h-10 px-4 py-2 rounded bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-solid hover:border-2 hover:cursor-pointer"
              >
                Confirm
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

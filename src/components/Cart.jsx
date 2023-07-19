import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const contactDetails = {
  name: "",
  contact: "",
  address: "",
};

const Cart = () => {
  const { cart, handleRemoveAll, handleRemove, handleIncreaseQuantity, handleDecreaseQuantity } = useContext(ProductContext);
  const [inputForm, setInputForm] = useState(contactDetails);

  const totalCost = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const handleForm = () => {
    if (!(inputForm.name && inputForm.contact && inputForm.address)) {
      alert("Error: Please fill the required fields.");
    } else {
      handleRemoveAll();
    }
  };

  return (
    <div className="flex flex-col justify-start items-center h-auto pt-10 gap-2 md:flex-row md:justify-center md:items-start">
      <div>
        {cart.length === 0 ? (
          <p>Empty Cart</p>
        ) : (
          cart.map((items, index) => {
            return (
              <div key={items.id} className="w-80 h-36 flex gap-4 px-2 mb-2 rounded-lg bg-slate-100">
                <div className="">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="h-full w-20 object-contain"
                  />
                </div>
                <div className="relative flex-1 flex flex-col items-end">
                  <div className="h-8 w-8 flex items-center justify-center text-xl my-2 rounded bg-slate-100 hover:cursor-pointer">
                    <TiDelete onClick={() => handleRemove(items.id)} className="text-slate-400"/>
                  </div>
                  <div className="w-full flex flex-col justify-center">
                    <p className="text-sm">{items.title} </p>
                    <p className="text-lg text-red-700 font-medium">
                      ${items.price}
                    </p>
                    <div className="flex items-center justify-start pl-10 gap-5 mt-1">
                    <button onClick={() => handleDecreaseQuantity(items.id)} className="flex justify-center items-center h-5 w-5 bg-slate-200 rounded">-</button>
                    <p>{items.quantity}</p>
                    <button onClick={() => handleIncreaseQuantity(items.id)}
                     className="flex justify-center items-center h-5 w-5 bg-slate-200 rounded">+</button>
                  </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div>
        {cart.length > 0 && (
          <div className="h-auto w-80 flex flex-col justify-center items-center gap-2 my-5 md:mt-10">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputForm.name}
              onChange={(e) =>
                setInputForm({ ...inputForm, name: e.target.value })
              }
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <input
              type="text"
              placeholder="Contact no."
              name="contact"
              value={inputForm.contact}
              onChange={(e) =>
                setInputForm({ ...inputForm, contact: e.target.value })
              }
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={inputForm.address}
              onChange={(e) =>
                setInputForm({ ...inputForm, address: e.target.value })
              }
              required
              className="w-64 h-8 p-2 rounded bg-slate-100"
            />
            <div className="w-full flex items-center justify-around font-bold my-5">
              <p>Total:</p>
              <p className="text-red-700 text-xl">${totalCost().toFixed(2)}</p>
            </div>
            <Link
              to={`${
                !(inputForm.name && inputForm.contact && inputForm.address)
                  ? "#"
                  : "/completed"
              }`}
              onClick={handleForm}
              className={`${
                !(inputForm.name && inputForm.contact && inputForm.address)
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-pointer"
              } w-auto h-10 px-4 py-2 rounded bg-orange-700 text-white`}
            >
              Confirm
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

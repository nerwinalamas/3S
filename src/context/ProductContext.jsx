import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsData(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (productId) => {
    const productToAdd = isData.find((product) => product.id === productId);
    if (productToAdd) {
      const productExist = cart.find((cartItem) => cartItem.id === productId);
      if (productExist) {
        let itemQuantity = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(itemQuantity);
      } else {
        setCart([{ ...productToAdd, quantity: 1 }, ...cart]);
      }
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const productExist = cart.find((cartItem) => cartItem.id === productId);
    if (productExist) {
      let itemQuantity = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(itemQuantity);
    }
  };

  const handleDecreaseQuantity = (productId) => {
    const productExist = cart.find((cartItem) => cartItem.id === productId);
    if (productExist) {
      let itemQuantity = cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
      setCart(itemQuantity);
    }
  };

  const handleRemoveAll = () => {
    setCart([]);
  };

  const handleRemove = (id) => {
    const products = cart.filter((item) => item.id !== id);
    setCart(products);
  };

  const handleTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <ProductContext.Provider
      value={{
        isData,
        isLoading,
        cart,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveAll,
        handleRemove,
        handleTotalQuantity,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

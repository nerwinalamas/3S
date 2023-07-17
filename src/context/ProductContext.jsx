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

  const handleAddToCart = (productId) => {
    const productToAdd = isData.find((product) => product.id === productId);
    if (productToAdd) {
      setCart([productToAdd, ...cart]);
    }
  };

  const handleRemoveAll = () => {
    setCart([])
  }

  const handleRemove = (id) => { 
    const products = cart.filter(item => item.id !== id)
    setCart(products);
   }

  console.log(cart);

  return (
    <ProductContext.Provider
      value={{ isData, isLoading, handleAddToCart, cart, handleRemoveAll, handleRemove }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

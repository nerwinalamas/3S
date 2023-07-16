import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Nav from "./components/Nav";
import { ProductProvider } from "./context/ProductContext";
import Cart from "./components/Cart";
import PurchaseComplete from "./components/PurchaseComplete";

const App = () => {
  return (
    <div>
      <ProductProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/products/:id" element={<CardDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/completed" element={<PurchaseComplete />} />
          </Routes>
        </Router>
      </ProductProvider>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Nav from "./components/Nav"

const App = () => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setIsData(data)
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Card isData={isData} isLoading={isLoading}/>} />
          <Route path="/products/:id" element={<CardDetails isData={isData} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

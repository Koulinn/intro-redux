import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

function Views() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default Views;

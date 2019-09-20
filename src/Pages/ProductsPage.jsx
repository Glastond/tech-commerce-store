import React from "react";
import Products from "../Components/ProductsPage/Products";
import Hero from "../Components/Hero";
import productsBcg from "../Images/productsBcg.jpeg";

const ProductsPage = () => {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
};

export default ProductsPage;

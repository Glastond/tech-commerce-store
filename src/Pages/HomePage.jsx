import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Services from "../Components/HomePage/Services";
import Featured from "../Components/HomePage/Featured";

const HomePage = () => {
  return (
    <>
      <Hero title="Awesome Gadgets" max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
};

export default HomePage;

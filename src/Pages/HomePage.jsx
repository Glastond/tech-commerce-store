import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../Components/Hero";
import Services from "../Components/HomePage/Services";
import Featured from "../Components/HomePage/Featured";
import Testimonials from "../Components/HomePage/Testimonials";
import Moto from "../Components/HomePage/Moto";

// slideshow
import Carousel from "../Components/Carousel";

const HomePage = () => {
  return (
    <>
      <Carousel />
      {/* <Hero title="Awesome Gadgets" max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          Our Products
        </Link>
      </Hero> */}
      <Services />
      <Featured />
      <Moto />
      <Testimonials />
    </>
  );
};

export default HomePage;

import Carousel from "react-bootstrap/Carousel";
// UseState
import React, { useState } from "react";
// LInk
import { Link } from "react-router-dom";

// Styled Component
import styled from "styled-components";

// Icons
import { FaArrowRight, FaShoppingBag } from "react-icons/fa";

// Images
import firstBackground from "../Images/11.jpg";
import secondBackground from "../Images/3.jpg";
import thirdBackground from "../Images/222.jpg";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <CarouselWrapper>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        className="main-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={firstBackground}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-cap">
              <h1 className="text-title">High Quality Products</h1>
              <p>Premium Quality Product At Lowest Price. </p>
              <Link
                to="/products"
                className="main-link"
                style={{ marginTop: "1rem" }}
              >
                View Products <FaArrowRight />
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondBackground}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carousel-cap">
              <h2 className="text-title">Fast and Easy Payments</h2>
              <Link
                to="/products"
                className="main-link"
                style={{ marginTop: "1rem" }}
              >
                View Offers <FaArrowRight />
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdBackground}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="carousel-cap">
              <h2 className="text-title">Free Shipping</h2>
              <p>Free Shipping on Orders Above $50.</p>
              <Link
                to="/products"
                className="main-link text-center"
                style={{ marginTop: "1rem" }}
              >
                <FaShoppingBag className="mr-2" />
                Order Now
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  align-items: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  img {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-size: cover !important;
    height: calc(100vh - 60px);
  }

  .main-carousel {
    position: relative;
  }

  .carousel-cap {
    position: absolute;
    padding: 2rem 1.5rem;
    bottom: 550%;
    left: 23%;
    width: 60%;
    height: 500%;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .carousel-cap p {
    color: var(--primaryColor);
  }
`;

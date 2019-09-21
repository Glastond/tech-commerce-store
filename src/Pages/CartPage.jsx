import React from "react";
import Hero from "../Components/Hero";
import cartBcg from "../Images/storeBcg.jpeg";
import CartSection from "../Components/CartPage/cart";

const CartPage = props => {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection history={props.history} />
    </>
  );
};

export default CartPage;

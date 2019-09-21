import React from "react";
import Title from "../Title";
import CartColumns from "./cartColumns";
import CartList from "./cartList";
import CartTotals from "./cartTotals";

export default function cart({ history }) {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="Your cart items" center />
      </div>
      {/* Cart Columns */}
      <CartColumns />
      {/* Cart list */}
      <CartList />
      {/* Total */}
      <CartTotals history={history} />
    </section>
  );
}

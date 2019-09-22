import React from "react";
import PaypalBtn from "./PaypalBtn";
import { ProductConsumer } from "../../Context/context";

export default function cartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;

            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
                <h3>Subtotal : ${cartSubTotal}</h3>
                <h3>Tax : ${cartTax}</h3>
                <h3>Cart Total : ${cartTotal}</h3>
                <div className="mt-5 ">
                  <PaypalBtn
                    history={history}
                    cartTotal={cartTotal}
                    clearCart={clearCart}
                  />
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}

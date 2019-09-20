import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown
} from "react-icons/fa";

export default function cartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;

  return (
    <div className="countainer-fluid row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* Image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} alt="product" width="60px" className="image-fluid " />
      </div>
      {/* End of Image */}
      {/* Title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none ">Product : </span>
        {title}
      </div>
      {/* End of Title */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 text-title">
        <span className="d-lg-none ">Price : </span>${price}
      </div>
      {/* End of price */}
      {/* Count Controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className={
                count > 0 ? "cart-icon text-primary" : "cart-icon text-muted"
              }
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* End of Count Controls */}
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* End of remove item */}
      {/* Item Total */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-title ">Item Total : </span>${total}
      </div>
      {/* End of Item Total */}
    </div>
  );
}

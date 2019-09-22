import React from "react";

export default function SingleTestimonial({ image, msg, name }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-lg mr-2 d-inline-block">
        <div className="card-img-top">
          <img
            src={`../${image}`}
            alt="Customer-img"
            className="img-fluid border-radius p-4"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{msg}</p>
        </div>
      </div>
    </div>
  );
}

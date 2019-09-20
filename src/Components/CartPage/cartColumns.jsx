import React from "react";

export default function cartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">Products</p>
        </div>
        {/* End of Single Column */}
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">name of product</p>
        </div>
        {/* End of Single Column */}
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">price</p>
        </div>
        {/* End of Single Column */}
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* End of Single Column */}
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">remove</p>
        </div>
        {/* End of Single Column */}
        {/* Single Column */}
        <div className="col-lg-2 text-title text-center">
          <p className="text-uppercase">Total</p>
        </div>
        {/* End of Single Column */}
      </div>
    </div>
  );
}

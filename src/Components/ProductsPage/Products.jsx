import React from "react";
import { ProductConsumer } from "../../Context/context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* Title */}
              <Title center title="Our Products" />
              {/* Filtering Section */}
              <ProductFilter />
              {/* Total Count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    Total Products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* products */}
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="text-title col text-center">
                    <h1>Sorry, No Items Found</h1>
                  </div>
                ) : (
                  filteredProducts.map(product => {
                    return <Product key={product.key} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

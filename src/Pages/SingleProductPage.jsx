import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import SingleProductImg from "../Images/singleProductBcg.jpeg";
import loadingImg from "../Images/loading-gear.gif";
import { ProductConsumer } from "../Context/context";

const SingleProductPage = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return (
              <div style={{ margin: "100px auto" }}>
                <img src={loadingImg} alt="" />
                <h1>Loading...</h1>
              </div>
            );
          }

          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;

          return (
            <>
              <Hero img={SingleProductImg} title={title} />
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 py-3">
                      <img
                        src={`../${image}`}
                        //src={image}
                        alt="Single Product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 py-3">
                      <h5 className="text-title mb-4">Model :{title}</h5>
                      <h5 className="text-capitalize text-muted mb-4">
                        Company : {company}
                      </h5>
                      <h5 className="text-main text-capitalize">
                        Price : ${price}
                      </h5>
                      <p className="text-capitalize text-title">
                        Some Info about product :{" "}
                      </p>
                      <p>{description}</p>
                      <button
                        type="button"
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                        onClick={() => addToCart(id)}
                      >
                        add to cart
                      </button>
                      <Link
                        to="/products"
                        className="main-link"
                        style={{ margin: "0.75rem" }}
                      >
                        Back to products
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        }}
      </ProductConsumer>
    </>
  );
};

export default SingleProductPage;

import React from "react";
import Title from "../Title";
import aboutBcg from "../../Images/aboutBcg.jpeg";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 my-3 mx-auto">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 col-md-6 my-3 mx-auto">
            <Title title="About us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              architecto aliquid vitae facilis ea quis quam, ducimus optio
              tempora ipsam.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              architecto aliquid vitae facilis ea quis quam, ducimus optio
              tempora ipsam.
            </p>
            <button className="main-link" style={{ marginTop: "2rem" }}>
              More info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

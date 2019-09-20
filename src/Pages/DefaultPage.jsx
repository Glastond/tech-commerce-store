import React from "react";
import Hero from "../Components/Hero";
import defaultBcg from "../Images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <>
      <Hero img={defaultBcg} title="404 Error" max="true">
        <h2 className="text-uppercase">
          <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
            return home
          </Link>
        </h2>
      </Hero>
    </>
  );
};

export default DefaultPage;

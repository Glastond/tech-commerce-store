import React from "react";
import styled from "styled-components";
import mainBcg from "../Images/mainBcg.jpeg";

export default function Hero({ img = mainBcg, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  align-items: center;
  display: flex;
  /* height: calc(100vh-60px); */
  justify-content: center;
  text-align: center;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  .title {
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;

// Hero.defaultProps = {
//   img: mainBcg
// };

import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context/context";
import logo from "../Images/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div
              className="container-fluid py-3 align-items-center"
              style={{ width: "90%" }}
            >
              <div className="row text-center mt-3 footer-text">
                <div className="col-md-4 col-12">
                  <img src={logo} alt="LOGO" />
                  <hr className="light" />
                  <div>
                    <p>+91-9930719856</p>
                    <p>Glaston D'souza</p>
                    <p>Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <h5>
                    {" "}
                    <strong> Delivery Days</strong>
                  </h5>
                  <hr className="light" />
                  <p>Monday - Friday : 8am to 7pm</p>
                  <p>Saturday & Sunday : 8am to 2pm</p>
                </div>
                <div className="col-md-4 col-12">
                  <h5>
                    {" "}
                    <strong> Explore More</strong>
                  </h5>
                  <hr className="light" />
                  <p>
                    <Link to="/about" className="footer-link">
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link to="/contact" className="footer-link">
                      Contact Us
                    </Link>
                  </p>
                  <p>
                    <Link to="/products" className="footer-link">
                      More Products
                    </Link>
                  </p>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12">
                  <hr className="light-100" />
                  <p className="text-capitalize">
                    {" "}
                    copyright &copy;{" "}
                    <span style={{ color: "var(--primaryColor)" }}>
                      Tech Commerce
                    </span>{" "}
                    {new Date().getFullYear}. All Rights reserved
                  </p>
                </div>
              </div>
              <div className="row text-center ">
                <div className="col-12 ">
                  {value.socialIcons.map(item => (
                    <a
                      href={item.url}
                      key={item.id}
                      target="_blank "
                      rel="noopener noreferrer"
                      className="ml-4"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--footerGrey);
  color: var(--mainWhite);

  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
  .footer-link {
    text-decoration: none;
    color: #c0bdbd;
  }
  .footer-link:hover {
    color: var(--primaryColor);
  }
`;

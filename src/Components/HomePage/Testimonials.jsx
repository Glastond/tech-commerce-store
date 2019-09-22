import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../../Context/context";
import styled from "styled-components";
import SingleTestimonial from "./SingleTestimonial";

export default function Testimonials() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <TestWrapper>
            <Title title="Customer Testimonials" center />
            <div className="container padding">
              <div className="row padding my-5">
                {value.Testimonials.map(item => {
                  const { id, image, name, msg } = item;
                  return (
                    <SingleTestimonial
                      key={id}
                      name={name}
                      msg={msg}
                      image={image}
                    />
                  );
                })}
              </div>
            </div>
          </TestWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const TestWrapper = styled.div`
  margin-bottom: 15px;
`;

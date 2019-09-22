import React from "react";
import styled from "styled-components";
import motoBcg from "../../Images/motoBcg.jpg";

export default function Moto() {
  return (
    <MotoWrapper>
      <div className="container text-center moto">
        <div className="row">
          <div class="col-md-6">
            <div class="panel text-left">
              <h1>Our Moto</h1>
              <p>
                Providing Best Quality Products and Service To all Our Customers
                At the Lowest Price.Making Living with High End Technology at an
                Affordable Price and Spreading Happy Faces Around The World.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={motoBcg} alt="Moto" />
            </div>
          </div>
        </div>
      </div>

      {/*         
      <div className="container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pray">
                            <img src={motoBcg} alt="pray"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel text-left">
                            <h1>
                                Mr. D'souza
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, dignissimos
                                incidunt?
                                Aspernatur dolor harum fugiat quaerat dolorem similique consectetur est.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa magni fuga, facere ipsum
                                voluptate debitis est placeat, voluptas cum aut porro delectus, sint harum totam
                                voluptatibus laboriosam nostrum adipisci cumque?
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
    </MotoWrapper>
  );
}

const MotoWrapper = styled.section`
  .img {
  }
`;

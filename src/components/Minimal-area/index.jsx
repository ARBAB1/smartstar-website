/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/slid/pic4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We pride ourselves on being small enough to really get to know you, yet big enough to give you easy access to the best the world of finance has to offer. Whatever your needs, we will provide objective insights, advice, products and services tailored to your personal goals
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                  To provide advanced and creative banking products and services for all our clients, both locally and internationally, through a successful team and using advanced programs, techniques and tools that keep up with the advancements in today’s world, in an effort to fulfill the aspirations of our clients, shareholders and employees,  and to reflect our values of social responsibility
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                 * Building and developing a professional banking services team, with the best experience and the ability to implement the latest techniques and systems.<br/>
                 * Building a strategic relationship with its clients and finance and banking institutions, both locally and internationally.
                 * Contributing to the promotion of social responsibility. <br/>
                 * Attracting deposits and developing them, in order to achieve the best financial return for shareholders and depositors.<br/>
                 * Expanding banking activities to include new sectors and economic activities; such as agriculture, industry, trade and services. <br/>
                 * Provide financing for investors.<br/>
                 * Provide security for depositors. <br/>
                 * Achieving high and rapidly increasing growth rates. <br/>
                 * Developing new and innovative investment formulas and banking services that fulfill the needs of all clients.<br/>
                  </p>
                </li>
             
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;

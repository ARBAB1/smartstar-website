import React, { Component } from "react";
import Slider from "react-slick";

function Transform() {
    return (
        <>
            <section className="bankSection">
                <div className="container-fluid bankingCon">
                    <div className="row">
                        <div className="col-4 afterMediUm">
                            <div className="bankingDemons">
                                <h4>Transform for growth</h4>
                                <br />
                                <p>
                                    Technology, regulation and competition are reshaping global banking and will redefine what it means to be a bank. Discover what you need to succeed in a digital future.
                                </p>
                            </div>
                        </div>
                        <div className="col-8 afterMediUm">
                            <AutoPlay />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Transform


class AutoPlay extends Component {
    render() {
      const settings = {
        arrow: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        className: "sliderBoxOfTranform",
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="innerDiv">
              <h3>New customer experience</h3>
              <p>
                Put customers at the centre of everything you do. <br />
                Reimagine the customer experience and offer hyper-personalised services when and where they are needed.
              </p>
            </div>

            <div className="innerDiv">
              <h3>Aligning costs with success</h3>
              <p>
              Optimise your technology stack and bring costs into line with success. <br />
              Your roadmap to modernisation can begin anywhere, with clear milestones along the way.
              </p>
            </div>

            <div className="innerDiv">
              <h3>Let data drive decisions</h3>
              <p>
              Harness the power of data, artificial intelligence
              and advanced analytics. As a data-driven bank, you can eliminate guesswork, transform processing and uncover new opportunities.
              </p>
              
            </div>

            <div className="innerDiv">
              <h3>Use opportunities</h3>
              <p>
              Anticipate and navigate global regulatory compliance. We will help you understand the real impact of regulatory change and turn compliance into a competitive advantage
              </p>
            </div>
          </Slider>
        </div>
      );
    }
}


  

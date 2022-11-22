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
                                <h4>Digitalizing Insurance Workflow</h4>
                                <br />
                                <p>
                                We provides customers with convenience, flexibility and payment security that enable insurance policies and premium features with confidence.
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
              <h3>Insurane agency Profits</h3>
              <p>
                We put Agencies at the centre of everything you do. <br />
                Reimagine the customer experience and offer hyper-personalised services when and where they are needed.
              </p>
            </div>

            <div className="innerDiv">
              <h3>Direct Payment Recievable</h3>
              <p>
              We can help agencies create trnsfer funds sent directly to bank account. Sender just needs to select 'Bank account' when arranging a money transfer.
              </p>
            </div>


            <div className="innerDiv">
              <h3> Management of Receivables</h3>
              <p>
              Good receivables management will directly contribute to your businesses' profit due to its ability to reduce bad debt             </p>
            </div>
          </Slider>
        </div>
      );
    }
}


  

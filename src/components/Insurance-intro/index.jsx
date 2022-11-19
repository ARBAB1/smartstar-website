import React, { Component } from "react";
import Slider from "react-slick";
import styles from  "./intro.module.css";


const BankIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Bring Of Your Prception</h4>
              <p>
                Worldwide banking has entered another age. New advanced banks
                are showing up all over and innovation is key to progress. Each
                bank should disturb or confront interruption.
              </p>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <AutoPlay />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BankIntro;

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
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <div className="row rowinfo">
          <Slider {...settings}>
            <div className="innerDiv">
              <h3>Banking Specialist</h3>
              <p className={styles.para}>
                Put customers at the centre of everything you do. <br />
                Reimagine the customer experience and offer hyper-personalised
                services when and where they are needed.
              </p>
            </div>

            <div className="innerDiv">
              <h3>Technical Knowledge</h3>
              <p className={styles.para}>
                Optimise your technology stack and bring costs into line with
                success. <br />
                Your roadmap to modernisation can begin anywhere, with clear
                milestones along the way.
              </p>
            </div>

            <div className="innerDiv">
              <h3>A worldwide Player</h3>
              <p className={styles.para}>
                Harness the power of data, artificial intelligence and advanced
                analytics. As a data-driven bank, you can eliminate guesswork,
                transform processing and uncover new opportunities.
              </p>
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}

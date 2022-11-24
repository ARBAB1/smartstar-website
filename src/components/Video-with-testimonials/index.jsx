/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="vimeo"
                      autoplay
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://vimeo.com/127203262"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cont">
                  <h3 className="wow" data-splitting>
                    Shaping the Digital world with Endless Possibilites
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Our Company Moto
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item ">
                    <p>
                      We believe that our clients should only be served by the
                      best in the industry, and we understand the value of
                      partnering for the long term
                    </p>
                    <div className="d-flex">
                      <div className="info m-1">
                        <div className="img">
                          <div className="img-box">
                            <img src="/img/Team/01 (Small).jpg" alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name custom-font">
                              Omer Farooq
                            </h6>
                            <span className="author-details">CEO Dubai</span>
                          </div>
                        </div>
                      </div>
                      <div className="info m-1">
                        <div className="img">
                          <div className="img-box">
                            <img src="/img/slid/ghayas.jpg" alt="" />
                          </div>
                        </div>
                        <div className="cont">
                          <div className="author">
                            <h6 className="author-name custom-font">
                              Asif Rizvi
                            </h6>
                            <span className="author-details">Co-founder</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;

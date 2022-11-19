import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className={styles.slide1}>
            <span>01 success Story</span>
          </div>
          <div className={styles.slide2}>
            <span>02 digital platform for retail</span>
          </div>
          <div className={styles.slide3}>
            <span>03 Green Bond issuance</span>
          </div>
          <div className={styles.slide4}>
            <span>04 SSSSCO Asset</span>
          </div>
          <div className={styles.slide5}>
            <span>05 Bank of International</span>
          </div>
        </Slider>
      </div>
    );
  }
}

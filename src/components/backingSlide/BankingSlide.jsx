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
            <h3>02 digital platform for retail</h3>
          </div>
          <div className={styles.slide3}>
            <h3>03 Green Bond issuance</h3>
          </div>
          <div className={styles.slide4}>
            <h3>04 SSSSCO Asset</h3>
          </div>
          <div className={styles.slide5}>
            <h3>05 Bank of International</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

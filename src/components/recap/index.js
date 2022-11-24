import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const index = () => {

    function onChange(value) {
      console.log("Captcha value:", value);
    }
  return (
    <ReCAPTCHA
      sitekey=""
      onChange={onChange}
    />
  );
}

export default index
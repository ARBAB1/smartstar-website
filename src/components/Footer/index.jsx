/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import { sendContactForm } from "../../lib/api";

const Footer = () => {
  const [popup , setPopup] = useState("false")

  const Popup = () =>{
    setPopup(!false)
  }
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0" className="logoFooter">
                  <img src={`${appData.lightLogo2}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email :</span> &nbsp;&nbsp;support@ssssco.com
                  </li>
                  <li>
                    <span>Karachi :</span>Amroha Society, Block-20, FB Area
                    Karachi.
                  </li>
               
                  <li>
                    <span>Karachi :</span> (+92) 335 0028601
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendContactForm(values);
                  alert("Subscribed Successfully"); 
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      {/* {popup ? <Subscribe /> : ""} */}
                      <button className="cursor-pointer" onClick={Popup}>
                        Subscribe
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="copyrights text-center"></div>
      </div>
    </footer>
  );
};

export default Footer;

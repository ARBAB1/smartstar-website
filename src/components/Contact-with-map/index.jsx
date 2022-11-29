import React from "react";
// import Recap from '../recap/index'hyq
import { Formik, Form, Field } from "formik";
import { sendConForm } from "../../lib/api";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendConForm(values)
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id="contact-form">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          />
                        </div>
                        {/* <Recap /> */}
                        <button type="submit" className="btn-curve btn-lit">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">support@ssssco.com</a>
                  </h5>
                  <h5> (+971) 50 829 0414</h5>
                  <h5> (+92) 335 0028601</h5>
                </div>
                <h3 className="custom-font wow" data-splitting>
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                    Mai Tower Office 1413
                    <br />
                    Al Nahda 1,Dubai
                  </h6>
                  <h6>
                    Amroha Society,
                    <br />
                    Block-20, FB Area Karachi.
                  </h6>
                </div>
                <div className="social mt-50">
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
                  {/* <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/place/Mai+Tower+Al+Nahada+1+Dubai+UAE/@25.2877276,55.3630381,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5d76ed3a113b:0x8ad7f49c0769c171!8m2!3d25.2877276!4d55.3652268"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </>
  );
};

export default ContactWithMap;

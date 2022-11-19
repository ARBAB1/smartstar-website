import React from "react";
import Split from "../Split";

const InsuranceIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>One Stop Shop Insurance
              </h4>
          
              
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Imagine if you had a one-stop shop for all your banking, insurance and financial needs? Well, SSSSCO has made that dream into a reality with Bancassurance. So what exactly is Bancassurance? Simply put, the core belief behind this phenomenal concept is to make life insurance protection readily available and accessible to one and all  to sell varied financial products through one window  making your local bank branch a “one-stop-financial-shop”.                       </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceIntro;

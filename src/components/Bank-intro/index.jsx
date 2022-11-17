import React from "react";
import Split from "../Split";

const BankIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Digital Bank Transformation made easy
              </h4>
              <p>
              Technology, regulation and competition are reshaping global banking and will redefine what it means to be a bank. Discover what you need to succeed in a digital future.
              </p>
              
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our worldwide, multi disciplinary groups have a profound, pragmatic comprehension of monetary administrations and the difficulties you face. For north of thirty years, a considerable lot of the world's top banks have confided in us to configuration, construct and run strategic arrangements. We can assist you with changing from heritage to computerized innovation.
                          </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankIntro;

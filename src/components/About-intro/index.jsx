import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our ambition is to be your trusted partner, work together towards your long-term objectives and foster positive change. Locally rooted and globally connected, we are part of Al-Rajhi Bank The bank is a major investor in Saudi Arabia's business and is one of the largest joint stock companies in the Kingdom, with over SR 330.5 billion in AUM and over 600 branches. As a network of financial service providers , we deliver solutions to local and global clients – both in terms of mindset and geography.
                With our digital solutions, you and your end clients benefit from state-of-the-art tools that make completing documents, onboarding and identification as easy as possible. This frees up the time and resources that you can focus on and optimally serve your clients. 
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;

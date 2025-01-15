import React from "react";

const ProjectDetails2Introduction = ({title,description,number}) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>{number} </span> {title}
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <p className="extra-text">
                {description}
              </p>

              {/* <ul className="smp-list mt-30">       
                <li>Aenean sollicitudin</li>
                <li>lorem quis bibendum auctor</li>
                <li>nisi elit conseq uat ipsum</li>
                <li>nec sagittis sem nibh id elit</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Introduction;

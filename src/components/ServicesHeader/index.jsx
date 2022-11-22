import React from "react";

const ServicesHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/Card.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Banking</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/Banking</span>
                <a href="#0" className="active">
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServicesHeader;

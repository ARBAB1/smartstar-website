import React from "react";

const ProductsHeader = ({title, subtitle, image, child}) => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: `url(${image})` }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
              <div className="path">
                <a href="#0">{subtitle}</a>
                <span>/{child}</span>
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

export default ProductsHeader;

import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = ({title, subtitle, description, image}) => {
  return (
    <section className="intro-section section-padding" >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div>
              <h2>{title}</h2>
              <h4 className="">{subtitle} </h4>
              <p className="extra-text">{description} </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <img src={image} alt="logo" />
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="#0">Envato.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Web Design </Link> ,
                <Link href="/works/works-dark">WordPress</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Minimal</Link> ,
                <Link href="/works/works-dark">Modern</Link> ,
                <Link href="/works/works-dark">Design</Link>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;

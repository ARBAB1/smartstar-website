import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <div className="sub-title">
                <h6>Know Us Better</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                  We help to create strategies, design & development for Digital Banking Solutions.
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                SSSSCO is modernising Digital banking system by re-platforming it onto a modern, cloud-enabled infrastructure and enabling the benefits of modern technologies, environments and architectures.
                </p>
              </Split>
              <Split>
                <Link href="/about">
                  <a
                    className="simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;

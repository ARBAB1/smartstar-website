import React from 'react'
import CEO from "../../data/sections/ourCeo.json";

function OurCeo() {
  return (
    <>
      <section className="team section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className='ceoCustomHead'>Our CEO&#39;s </h3>
          </div>
          <div className="row justify-content-center pt-5">
            {CEO.map((item) => (
              <div
                className="item wow col-lg-3 fadeInUp customCol"
                key={item.id}
              >
                <div className="img wow imago teamCard">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <h5>{item.name}</h5>
                  <span>{item.title}</span>
                  <div className="social">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCeo

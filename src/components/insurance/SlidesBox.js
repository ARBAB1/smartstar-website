import React from 'react'

function SlidesBox() {
  return (
    <>
         <section className='slidesSection'>
                <div className="firstOneDiv"></div>

                <div className="container-fuild sliderCon">
                    <div className="row">
                        <div className="col-lg-3 slidesBox">
                           <div className="innerSlidesDiv">
                            <h2>Create business value</h2>
                            <h4>Retail banking</h4>
                              <p>
                                  Remember when banking was a stable business?
                                  That was yesterday.
                                  Today your bank faces disruption from every angle.
                              </p>
                           </div>
                        </div>

                        <div className="col-lg-3 slidesBox">
                           <div className="innerSlidesDiv">
                            <h2>SOLUTION</h2>
                            <h4>BankLiteX</h4>
                              <p>
                              BankLiteX is a modular, end-to-end solution that empowers you to create and deploy a cloud-based, digital banking entity, faster than previously possible.
                              </p>
                           </div>
                        </div>

                        <div className="col-lg-3 slidesBox">
                           <div className="innerSlidesDiv">
                            <h2>SOLUTION</h2>
                            <h4>High performance computing</h4>
                              <p>
                              High performance computing (HPC) on the cloud gives you instant access to aggregated computing power and you only pay for what your use.
                              </p>
                           </div>
                        </div>


                        <div className="col-lg-3 slidesBox">
                           <div className="innerSlidesDiv">
                            <h2>Game changer</h2>
                            <h4>Cloud – expand your horizons</h4>
                              <p>
                              Because not everyone has the same starting point, walk your cloud transformation path at your own pace and make sure you have an experienced guide by your side.
                              </p>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    </>
  )
}

export default SlidesBox

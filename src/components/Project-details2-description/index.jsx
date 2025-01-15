import React from "react";
import Link from "next/link";

const ProjectDetails2Description = ({title, subtitle, description, image,list2,position}) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          {position === "right" &&
     <div className="col-lg-5 offset-lg-1 col-md-8 mb-30">
     <div>
       {/* <h2>{title}</h2> */}
       {/* <h4 className="">{subtitle} </h4> */}
       <div className="p-4 text-white " style={{ borderRadius: "10px" }}>
   <h5 className="fw-bold text-white">{title}</h5>
   {
list2.map((item, index) => (
<ol key={index+1} className="mt-3 ">
<li> {item.title}</li>

<ul className="mt-3 smp-list">
{


item?.list?.map((subItem, subIndex) => (
<li className="smp-list" key={subIndex}>{subItem}</li>
))
}
</ul>

</ol>
))
}
 </div>
     </div>
   </div>
          }
     
          <div className="col-lg-5 col-md-4">
            <div className="htit">
              <img src={image} alt="logo" className="img-fluid w-100 h-100" />
            </div>
          </div>
          {position === "left" &&
     <div className="col-lg-5 offset-lg-1 col-md-8 mb-30">
     <div>
       {/* <h2>{title}</h2> */}
       {/* <h4 className="">{subtitle} </h4> */}
       <div className="p-4 text-white " style={{ borderRadius: "10px" }}>
   <h5 className="fw-bold text-white">{title}</h5>
   {
list2.map((item, index) => (
<ol key={index+1} className="mt-3 ">
<li> {item.title}</li>

<ul className="mt-3 smp-list">
{


item?.list?.map((subItem, subIndex) => (
<li className="smp-list" key={subIndex}>{subItem}</li>
))
}
</ul>

</ol>
))
}
 </div>
     </div>
   </div>
          }
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Description;

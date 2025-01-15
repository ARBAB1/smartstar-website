import React from "react";

const ProjectDetailsDescription = ({title1, title2,mainTitle,list1, list2}) => {
  return (
    <div className="container-fluid bg-dark text-light py-5">
    <div className="text-center mb-4">
      <h2 className="fw-bold">{mainTitle}</h2>
    </div>
    <div className="row justify-content-center">
      {/* Left Card */}
      <div className="col-lg-5 col-md-6 mb-4">
        <div className="p-4 text-white" style={{ backgroundColor: "#007bff", borderRadius: "10px" }}>
          <h5 className="fw-bold">{title1}</h5>
{
list1.map((item, index) => (
  <ol key={index+1} className="mt-3">
    <li> {item.title}</li>
{
  

item?.list?.map((subItem, subIndex) => (
  <li key={subIndex}>{subItem}</li>
))

}
  </ol>
))
}
        
        </div>
      </div>

      {/* Right Card */}
      <div className="col-lg-5 col-md-6 mb-4">
        <div className="p-4 text-dark bg-light" style={{ borderRadius: "10px" }}>
          <h5 className="fw-bold text-dark">{title2}</h5>
          {
list2.map((item, index) => (
  <ol key={index+1} className="mt-3">
    <li> {item.title}</li>
{
  

item?.list?.map((subItem, subIndex) => (
  <li key={subIndex}>{subItem}</li>
))

}
  </ol>
))
}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectDetailsDescription;

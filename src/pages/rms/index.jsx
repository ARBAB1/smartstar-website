import React from "react";
import ServicesHeader from "../../components/ServicesHeader";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import ProductsHeader from "../../components/ProductsHeader";
import ProjectDetailsIntroduction from "../../components/Project-details-introduction";
import ProjectDetailsImages from "../../components/Project-details-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Description from "../../components/Project-details2-description";

const ResturantManagement = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const list1 = [
    {
      id: 1,
      title: "",
      list: [
        "Dashboard for Order Statistics"
      ],
    },
    {
      id: 2,
      title: "",
      list: [
        "Menu & Order Management:",
        
      ],
    },
    {
      id: 3,
      title: "",
      list: [
        "Sales Analytics",
      ],
    },
    {
      id: 4,
      title: "",
      list: [
        "Notifications",
     
      ],
    }
  ];
  const list2 = [
 
    {
      id: 2,
      title: "",
      list: [
        "Restaurant Browsing & Ordering.",
        
      ],
    },
    {
      id: 3,
      title: "",
      list: [
        "Real-time Order Tracking"
      ],
    },
    {
      id: 4,
      title: "",
      list: [
        "Multiple Payment Options",
     
      ],
    },
    {
      id: 5,
      title: "",
      list: [
        "Notifications",
     
      ],
    },
  ];
  const list3 = [
    {
      id: 1,
      title: "",
      list: [
        "Delivery Task Management:"
      ],
    },
    {
      id: 2,
      title: "",
      list: [
        "Route Optimization:",
        
      ],
    },
  
    {
      id: 4,
      // title: "Real-time Status Updates",
      list: [
        "Real-time Status Updates",
        
      ],
    },
  ];
  const list5 = [
    {
      id: 1,
      title: "Key Benefits",
      list: [
        "Enhanced User Convenience: Streamlined booking and navigation for end-users",
        "Operational Efficiency: Real-time tracking and automation reduce manual oversight",
        "Maximized Utilization: Optimize space allocation and revenue."
      ],
    },
   
  ];
  const list4 = [
    {
      id: 1,
      title: "",
      list: [
        "Comprehensive User Management",
     
      ],
    },
    {
      id: 2,
      title: "",
      list: [
        "Order Monitoring",
     
      ],
    },
    {
      id: 3,
      title: "",
      list: [
        "Payment Gateway Integration",
     
      ],
    },
    {
      id: 4,
      title: "",
      list: [
        "Reports and Analytics",
     
      ],
    },
    {
      id: 5,
      title: "",
      list: [
        "Promotional tools to manage discounts and offers",
     
      ],
    },
  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ProductsHeader
        title={"Restaurant Management System"}
        subtitle={"Home"}
        child={"Restaurant Management System"}
        image={"/img/rms.jpg"}
      />
      <ProjectDetails2Introduction
         title={"Overview"}
         number={"01"}

        description={
"An end-to-end solution designed with three mobile apps—Customer, Restaurant, and Rider—paired with an Admin Panel to streamline operations and optimize user experiences."}
//         image={"/img/rize1.png"}
      />
     
   <ProjectDetails2Description
        title={"Customer App"}
        position={"right"}      
        image={"/img/rms1.png"}
        list2={list2}
      />
       <ProjectDetails2Description
        title={"Restaurant Owner App"}
      position={"left"}
        image={"/img/rms3.png"}
        list2={list1}
      />
         <ProjectDetails2Description
        title={"Rider App"}
      position={"right"}
        image={"/img/rms3.png"}
        list2={list3}
      />
          <ProjectDetails2Description
        title={"Admin Panel"}
      position={"left"}
        image={"/img/rms3.png"}
        list2={list4}
      />
          <ProjectDetails2Description
        title={"Benefits & Technical Highlights"}
      position={"right"}
        image={"/img/rms3.png"}
        list2={list5}
      />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default ResturantManagement;

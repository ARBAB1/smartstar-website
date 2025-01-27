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

const CampaignManagementSystem = () => {
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
      title: "Dashboard for Order Statistics",
      // list: [
      //   "Access to order statistics and restaurant details."
      // ],
    },
    {
      id: 2,
      title: "Menu & Order Management:",
      // list: [
      //   "View and manage menu items and orders and track their availability.",
        
      // ],
    },
    {
      id: 3,
      title: "Sales Analytics",
      // list: [
      //   "Insights into sales and customer preferences.",
      // ],
    },
    {
      id: 4,
      title: "Notifications",
      // list: [
      //   "Alerts for new orders, stock levels, and promotions",
     
      // ],
    }
  ];
  const list2 = [
    {
      id: 1,
      title: "Customizable Parameters",
      list: [
        "Define criteria like product type, transaction volume, or demographics"
      ],
    },
    {
      id: 2,
      title: "Segmentation",
      list: [
        "Target specific customer groups such as frequent shoppers or young account holders",
        
      ],
    },
  
  ];
  const list3 = [
    {
      id: 1,
      title: "Dynamic Criteria:",
      list: [
        "Automatically select winners based on rules (e.g., highest spenders or most transactions)."
      ],
    },
    {
      id: 2,
      title: "Recurring Winners:",
      list: [
        "Support for weekly, biweekly, or monthly winners",
        
      ],
    },
    {
      id: 3,
      title: "Custom Rewards:",
      list: [
        "Assign monetary or non-monetary incentives.",
      
      ],
    }
   
  ];
  const list5 = [
    {
      id: 1,
      title: "Enhanced Engagement",
      list: [
        "Engage customers effectively with tailored campaigns",
        "Operational Efficiency: Real-time tracking and automation reduce manual oversight",
        "Maximized Utilization: Optimize space allocation and revenue."
      ],
    },
    {
      id: 2,
      title: "Data-Driven Decisions",
      list: [
        "Analyze campaign performance and customer behavior in real time"
      ],
    },
    {
      id: 3,
      title: "Efficiency Boost",
      list: [
        "Automate campaign scheduling and winner selection processes"
      ],
    },
  ];
  const list4 = [
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
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ProductsHeader
        title={"Campaign Management System"}
        subtitle={"Home"}
        child={"Campaign Management System"}
        image={"/img/c1.jpeg"}
      />
      <ProjectDetails2Introduction
         title={"Overview"}
         number={"01"}
      
        description={
"A comprehensive solution to create, manage, and analyze promotional campaigns for bank products. The CMS empowers banks to engage customers effectively, track campaign performance, and identify top performers based on dynamic criteria."}

      />
     
   <ProjectDetails2Description
        main_title={"Core Features"}
        title={"Campaign Creation"}
        position={"right"}      
        image={"/img/c2.png"}
        list2={list2}
        subtitle={"Winner Selection"}
        list={list3}
      />
         <ProjectDetails2Description
        main_title={"Benefits & Advanced Features"}
        title={"Key Benefits"}
        position={"left"}      
        image={"/img/c3.png"}
        list2={list5}
        subtitle={"Winner Selection"}
        list={list4}
      />

     
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default CampaignManagementSystem ;

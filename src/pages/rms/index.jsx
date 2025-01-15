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
      title: "Customer App",
      // list: [
      //   "Users can create personal accounts for a personalized experience."
      // ],
    },
    {
      id: 2,
      title: "Restaurant Browsing & Ordering",
      // list: [
      //   "Explore and order from a variety of favorite restaurants.",
        
      // ],
    },
    {
      id: 3,
      title: "Real-time Order Tracking",
      // list: [
      //   "Monitor orders in real-time."
      // ],
    },
    {
      id: 4,
      title: "Multiple Payment Options",
      // list: [
      //   "Multiple payment options available for convenience.",
     
      // ],
    },
    {
      id: 5,
      title: "Notifications",
      // list: [
      //   "Receive alerts for order confirmations and updates.",
     
      // ],
    },
  ];
  const list3 = [
    {
      id: 1,
      title: "Delivery Task Management:",
      // list: [
      //   "Amount approves depending on to customer’s financial profile and may have a fixed limit",
      //   "Get funds to achieve your personal financial needs."
      // ],
    },
    {
      id: 2,
      title: "Route Optimization:",
      // list: [
      //   "Introducing fixed term financing",
        
      // ],
    },
    {
      id: 3,
      title: "Route Optimization",
      // list: [
      //   "Financing that comes with an interest rate that is fixed",
      //   "Customer repay the loan in installments over a fixed period, with options for short or long-term loans",
      //   "With minimal documentation, approval for the loan can be obtained.",
      // ],
    },
    {
      id: 4,
      title: "Real-time Status Updates",
     
    },
  ];
  const list4 = [
    {
      id: 1,
      title: "Comprehensive User Management",
      
    },
    {
      id: 2,
      title: "Order Monitoring",
     
    },
    {
      id: 3,
      title: "Payment Gateway Integration",
     
    },
    {
      id: 4,
      title: "Reports and Analytics",
     
    },
    {
      id: 5,
      title: "Promotional tools to manage discounts and offers",
     
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
//         subtitle={
// "TRANSFORMING BANKING WITH AL RAJHI BANKING & INVESTMENT CORPORATION (MALAYSIA)"
//         }
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
        image={"/img/rms2.png"}
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
      position={"left"}
        image={"/img/rms3.png"}
        list2={list4}
      />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default ResturantManagement;

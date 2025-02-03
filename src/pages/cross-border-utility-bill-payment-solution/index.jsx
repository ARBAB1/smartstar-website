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

const CrossBorderUtilityBillPayment = () => {
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
  const list = [
    {
        "id": 1,
        "title": "Real-Time Transaction Processing",
        "desc": "The backend system enables instant transaction routing, processing, and reconciliation."
    },
    {
        "id": 2,
        "title": "Global Banking Network Integration",
        "desc": "API integrations with partner banks via Open Banking protocols."
    },
    {
        "id": 3,
        "title": "Multi-Currency Support and FX Conversion",
        "desc": "Integration with FX providers to offer competitive exchange rates for seamless cross-border transfers."
    },
    {
        "id": 4,
        "title": "Compliance and Security",
        "desc": "Built-in KYC/AML modules for regulatory adherence. PCI DSS and GDPR compliance for safeguarding sensitive user data."
    },
    {
        "id": 5,
        "title": "Transaction Tracking and Notifications",
        "desc": "Real-time updates with SMS and email notifications to keep users informed about their transfer status."
    },
    {
        "id": 6,
        "title": "Advanced Reporting and Analytics",
        "desc": "Tools for tracking transaction history, exchange rates, and system performance, including visual dashboards for administrators."
    },
    {
        "id": 7,
        "title": "Clearing and Settlement",
        "desc": "Integration with domestic and international clearinghouses for seamless transaction settlements."
    }
]

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
        title={"Cross-Border Utility Bill Payment Solution"}
        subtitle={"Home"}
        child={"Cross-Border Utility Bill Payment Solution"}
        image={"/img/bank.avif"}
      />
      <ProjectDetails2Introduction
         title={"Overview"}
         number={"01"}

        description={
            "A seamless and secure platform enabling users to pay utility bills, both domestic and international, through a fintech app. Designed for simplicity and transparency, this solution integrates real-time data fetching, currency conversion, and secure payment processing for a hassle-free experience."
                                   }
      />
     
   <ProjectDetails2Description
    title={"Core Features"}
        position={"right"}      
        image={"/img/cross2.png"}
        list2={list}
      />
      
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default CrossBorderUtilityBillPayment;

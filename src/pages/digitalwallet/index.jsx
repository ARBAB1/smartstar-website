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

const DigitalWallet = () => {
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
      title: "Payment Processing",
      list: [
        "Secure and instant online payments via Fund Transfer (FT), IBFT, top-ups, and QR code scanning"
      ],
    },
    {
      id: 2,
      title: "User Authentication",
      list: [
        "Multi-factor authentication (PIN, biometrics) for secure access and transactions.",
        
      ],
    },
    {
        id: 2,
        title: "Transaction History",
        list: [
          "Multi-factor authentication (PIN, biometrics) for secure access and transactions.",
          
        ],
      },
      {
        id: 2,
        title: "Peer-to-Peer Payments (P2P)",
        list: [
          "Multi-factor authentication (PIN, biometrics) for secure access and transactions.",
          
        ],
      },
      {
        id: 2,
        title: "Real-Time Notifications",
        list: [
           "Alerts for transactions, balances, and offers to keep users informed and engaged.",
          
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
      title: "Enhanced Security",
      list: [
        "Multi-factor authentication ensures safe transactions"
      ],
    },
    {
      id: 2,
      title: "Convenience",
      list: [
        "Simplifies online payments and fund management."
      ],
    },
    {
      id: 3,
      title: "User Engagement:",
      list: [
        "Real-time notifications for seamless interaction and awareness"
      ],
    },
    {
      id: 3,
      title: "Comprehensive Record-Keeping:",
      list: [
        "Transaction history aids in personal finance management."
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
        title={"DigitalWallet"}
        subtitle={"Home"}
        child={"DigitalWallet"}
        image={"/img/digi1.jpeg"}
      />
      <ProjectDetails2Introduction
         title={"Overview"}
         number={"01"}

        description={
"A secure and seamless digital wallet application that allows users to store and manage payments, including debit cards, bill payments, and fund transfers. Designed for easy online transactions, the solution enhances financial accessibility and efficiency."}

      />
     
   <ProjectDetails2Description
        main_title={"Core Features"}
        title={"User App"}
        position={"right"}      
        image={"/img/digi2.png"}
        list2={list2}
      
      />
         <ProjectDetails2Description
        main_title={"Benefits & Next Steps"}
        title={"Key Benefits"}
        position={"left"}      
        image={"/img/digi3.png"}
        list2={list5}
  
      />

     
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default DigitalWallet ;

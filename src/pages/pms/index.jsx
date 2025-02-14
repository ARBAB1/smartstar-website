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

const ParkingManagement = () => {
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
        "id": 1,
        "title": "Real-Time Availability",
        "desc": "View and book available parking spaces."
    },
    {
        "id": 2,
        "title": "Navigation Assistance",
        "desc": "Turn-by-turn directions to the reserved spot."
    },
    {
        "id": 3,
        "title": "Payment Integration",
        "desc": "Multiple payment options (cards, wallets, and QR codes)."
    },
    {
        "id": 4,
        "title": "Parking History",
        "desc": "Track past bookings and expenses."
    },
    {
        "id": 5,
        "title": "Notifications",
        "desc": "Alerts for booking confirmation, expiration, and offers."
    },
    {
        "id": 6,
        "title": "Space Monitoring",
        "desc": "Real-time tracking of occupancy and availability."
    },
    {
        "id": 7,
        "title": "Revenue Tracking",
        "desc": "View earnings and payment reports."
    },
    {
        "id": 8,
        "title": "Access Control",
        "desc": "Manage user roles and permissions."
    },
    {
        "id": 9,
        "title": "Analytics",
        "desc": "Generate reports on usage patterns, peak hours, and customer feedback."
    }
]

  const list2 = [
    {
        "id": 1,
        "title": "Real-Time Availability",
        "desc": "View and book available parking spaces."
    },
    {
        "id": 2,
        "title": "Navigation Assistance",
        "desc": "Turn-by-turn directions to the reserved spot."
    },
    {
        "id": 3,
        "title": "Payment Integration",
        "desc": "Multiple payment options (cards, wallets, and QR codes)."
    },
    {
        "id": 4,
        "title": "Parking History",
        "desc": "Track past bookings and expenses."
    },
    {
        "id": 5,
        "title": "Notifications",
        "desc": "Alerts for booking confirmation, expiration, and offers."
    }
]

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
        title={"Parking Management"}
        subtitle={"Home"}
        child={"Parking Management System"}
        image={"/img/p.jpg"}
      />
      <ProjectDetails2Introduction
         title={"Overview"}
         number={"01"}

        description={
"The Parking Management Solution is a comprehensive system designed to optimize parking operations, improve user convenience, and maximize space utilization. It includes real-time tracking, payment integrations, and analytics for operational efficiency."}
//         image={"/img/rize1.png"}
      />
     
   <ProjectDetails2Description
        title={"User App"}
        position={"right"}      
        image={"/img/p1.png"}
        list2={list2}
      />
       <ProjectDetails2Description
        title={"Admin Panel"}
      position={"left"}
        image={"/img/p2.png"}
        list2={list1}
      />
       
 
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default ParkingManagement;

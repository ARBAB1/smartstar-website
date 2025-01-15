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

const Rize = () => {
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
      title: "Credit Line:",
      list: [
        "The bank assigns a maximum credit limit to its customers which they can use for various financial needs",
        "Monitoring of utilized limits"
      ],
    },
    {
      id: 2,
      title: "Encouraging Financial Behavior:",
      list: [
        "Introducing Cashback incentive",
        
      ],
    },
    {
      id: 3,
      title: "Flexibility and Adaptability",
      list: [
        "Interest is only charged on the outstanding balance, and it’s typically based on the amount of credit utilized",
        "The customer can make regular payments to repay the borrowed amount",
        "As the customer repays the borrowed amount, the credit limit becomes available again",
      ],
    },
    {
      id: 4,
      title: "Technology Integration",
      list: [
        "RCL origination facilitated via Digibank app",
        "Access to generated RCL reports via portal for compliance and management.",
     
      ],
    },
  ];
  const list2 = [
    {
      id: 1,
      title: "Investment",
      list: [
        "Term Deposit is a lump sum savings account with a fixed deposit period",
        "Seamless digital investment platform",
      ],
    },
    {
      id: 2,
      title: "Encouraging Digital Investment",
      list: [
        "Introducing Digital Term Deposit placements via App",
        
      ],
    },
    {
      id: 3,
      title: "Flexibility and Adaptability",
      list: [
        "Predetermined interest rate which remains constant throughout the deposit period.Predetermined interest rate which remains constant throughout the deposit period.",
        "Aims to improve digital banking experience",
        "Prioritize capital preservation and a predictable income stream",
        "Earn interest at the end of the deposit term"
      ],
    },
    {
      id: 4,
      title: "Technology Integration",
      list: [
        "TD origination is facilitated through the Digibank app",
        "Access to generate TD reports via the portal for portfolio management and compliance",
     
      ],
    },
  ];
  const list3 = [
    {
      id: 1,
      title: "Personal Credit:",
      list: [
        "Amount approves depending on to customer’s financial profile and may have a fixed limit",
        "Get funds to achieve your personal financial needs."
      ],
    },
    {
      id: 2,
      title: "Encouraging Digital Lending:",
      list: [
        "Introducing fixed term financing",
        
      ],
    },
    {
      id: 3,
      title: "Flexibility and Adaptability",
      list: [
        "Financing that comes with an interest rate that is fixed",
        "Customer repay the loan in installments over a fixed period, with options for short or long-term loans",
        "With minimal documentation, approval for the loan can be obtained.",
      ],
    },
    {
      id: 4,
      title: "Technology Integration",
      list: [
        "PF origination facilitated via Digibank app",
        "Access to generated RCL reports via portal for compliance and management.",
     
      ],
    },
  ];
  const list4 = [
    {
      id: 1,
      title: "SME Financing:",
      list: [
        "Specialized financing and credit options for your large-scale projects for business expansion",
        "Get funds to achieve your Business goals",
      ],
    },
    {
      id: 2,
      title: "Encouraging Digital Financing:",
      list: [
        "Introducing Digital SME Financing",
        
      ],
    },
    {
      id: 3,
      title: "Flexibility and Adaptability",
      list: [
        "Financing that comes with fixed repayment terms",
        "Customers repay the loan in installments over a fixed period, for long-term loans",
        "Offer digital platforms for SMEs to manage their finances, make transactions, and access funding more efficiently",

      ],
    },
    {
      id: 4,
      title: "Technology Integration",
      list: [
        "CF origination is facilitated through the Digibank app",
        "Access to generate TD reports via the portal for portfolio management and compliance",
     
      ],
    },
  ];
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ProductsHeader
        title={"Rize"}
        subtitle={"Home"}
        child={"Rize"}
        image={"/img/bank.jpg"}
      />
      <ProjectDetailsIntroduction
        title={"Rize"}
        subtitle={
"TRANSFORMING BANKING WITH AL RAJHI BANKING & INVESTMENT CORPORATION (MALAYSIA)"
        }
        description={
"Experience a new era in banking with Rize. Open a savings account anytime, anywhere, apply for personal financing with funds deposited in your account within 15 minutes. Rize provides 24/7 access to your financial information and a comprehensive suite of banking services. Whether you want to check your balance, transfer funds, pay bills, or deposit checks, it’s all convenient and secure from the comfort of your home or on the go using Rize. Rize is revolutionizing the banking experience, combining anytime, anywhere access, robust security measures, personalized financial insights, and a wide range of banking services. Embrace the power of digital banking with Rize and unlock a world of possibilities for effortless and efficient financial management."
        }
        image={"/img/rize1.png"}
      />
      {/* <ProjectDetailsImages/> */}
      <ProjectDetailsDescription
        title1={"READY CASHLINE (RCL)"}
        title2={"TERM DEPOSIT (TD)"}
        mainTitle={"Essential Banking Services"}
        list1={list1}
        list2={list2}
      />
       <ProjectDetailsDescription
        title1={"Personal Financing (PF)"}
        title2={"Corporate Financing (CF)"}
        mainTitle={"Digital Lending"}
        list1={list3}
        list2={list4}
      />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default Rize;

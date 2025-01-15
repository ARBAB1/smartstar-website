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

const Welab = () => {
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
       "Welab  innovative healthcare delivery system extends far beyond blood specimen collection and delivery. By connecting patients with licensed healthcare professionals through a mobile platform, Welab can offer a wide range of in-home medical services such as IV hydration, ECGs, and vaccines.",
       "Welab is revolutionizing the healthcare industry, making quality healthcare services accessible, efficient, and convenient. Embrace the future of healthcare with Welab."
      ]
    }]
    const list2 = [
        {
          id: 1,
          title: "",
          list: [
           "Welab  innovative healthcare delivery system extends far beyond blood specimen collection and delivery. By connecting patients with licensed healthcare professionals through a mobile platform, Welab can offer a wide range of in-home medical services such as IV hydration, ECGs, and vaccines.",
           "Welab is revolutionizing the healthcare industry, making quality healthcare services accessible, efficient, and convenient. Embrace the future of healthcare with Welab."
          ]
        }]
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
     <ProductsHeader title={"WELAB"} subtitle={"Home"} child={"Welab"} image={"/img/welab.jpg"}/>
     <ProjectDetailsIntroduction title={"Welab"} subtitle={"WE ARE PROUD TO PRESENT WELAB, A GROUNDBREAKING SOLUTION THAT BRINGS HEALTHCARE SERVICES TO YOUR DOORSTEP WITH SPEED AND CONVENIENCE."} description={"              Welab is a Software-as-a-Service (SaaS) platform that seamlessly connects patients with healthcare providers, enabling services to be performed in the comfort of their own homes. With Welab, licensed healthcare professionals are just a click away, providing on-demand healthcare services."} image={"/img/welabmobile.png"}/>
     {/* <ProjectDetailsImages/> */}
     <ProjectDetailsDescription title1={"Discovery Phase"} title2={"Beyond Blood Collection:"}  mainTitle={"Benefits for All Stakeholders"} list1={list1} list2={list2} />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default Welab;

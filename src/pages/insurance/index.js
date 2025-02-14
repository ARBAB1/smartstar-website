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
import InsuranceHeader from "../../components/InsuranceHeader";
import InsuranceIntro from "../../components/Insurance-intro";
import Transform from "../../components/insurance/Transform";
import SlidesBox from "../../components/insurance/SlidesBox";
import AboutInsurance from "../../components/insurance/AboutInsurance";


const Insurance = () => {
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
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <InsuranceHeader/>
      <Transform />
      <AboutInsurance />
      <SlidesBox />
      <InsuranceIntro/>
      {/* <Services4 withPadding withOutTitle />
      <CallToAction subBG /> */}
      <Footer />
    </DarkTheme>
  );
};

export default Insurance;

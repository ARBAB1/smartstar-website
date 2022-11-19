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
import BankIntro from "../../components/Bank-intro";
import Transform from "../../components/banking/Transform";
<<<<<<< HEAD
import SlidesBox from "../../components/banking/SlidesBox";
=======
import Specialist from "../../components/banking/Specialist";

>>>>>>> 39f71d8f6c69c2401a81b1516e5852d036f4a137

const Banking = () => {
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
      <ServicesHeader />
      <Transform />
      {/* <SlidesBox /> */}
      <Specialist />
      {/* <BankIntro/> */}
      {/* <Services4 withPadding withOutTitle /> */}
      {/* <CallToAction subSBG /> */}
      <Footer />
    </DarkTheme>
  );
};

export default Banking;

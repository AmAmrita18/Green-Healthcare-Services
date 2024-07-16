import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Caregivers from './components/Caregivers'
import Faq from './components/Faq'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Contact2 from './components/Contact2'
import {  useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
   
  };
  
  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <Hero scrollToSection={scrollToSection}/>
      <About scrollToSection={scrollToSection}/>
      <Services />
      <Caregivers scrollToSection={scrollToSection}/>
      <Contact />
      <Faq />
      <Contact2/>
      <Footer scrollToSection={scrollToSection}/>
    </>
  )
}

export default App

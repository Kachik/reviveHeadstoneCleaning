import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/roses.jpg";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="FAQ"
        url="/"
        btnClass="hide"
      />
      <Faq />
      <Footer />
    </>
  );
}
export default About;

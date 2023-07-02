import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/gold_background.jpg";
import Footer from "../components/Footer";
import Services from "../components/Services";
import ServicesTotal from "../components/ServicesTotal";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Our Services"
        url="/"
        btnClass="hide"
      />
      <ServicesTotal />
      <Services />
      <Footer />
    </>
  );
}
export default Service;

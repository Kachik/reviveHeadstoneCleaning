import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import HomeImg from "../assets/12.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import ServicesTotal from "../components/ServicesTotal";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Los Angeles Headstone Cleaning"
        text="Keeping memories polished."
        buttonText="Learn More"
        url="#section1"
        btnClass="show"
      />
      <Introduction />
      <Destination />
      <ServicesTotal />
      <Footer />
    </>
  );
}
export default Home;

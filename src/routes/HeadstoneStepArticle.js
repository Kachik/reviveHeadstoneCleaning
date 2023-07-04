import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import HomeImg from "../assets/12.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import ContactImg from "../assets/contact.jpg";
import HeadstoneStepByStep from "../components/HeadstoneStepByStep";

function HeadstoneStepByStepArticle() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Headstone Cleaning"
        url="/"
        btnClass="hide"
      />
      <HeadstoneStepByStep />
      <Footer />
    </>
  );
}
export default HeadstoneStepByStepArticle;

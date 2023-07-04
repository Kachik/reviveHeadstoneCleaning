import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactBefore from "../components/ContactBefore";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us"
        url="/"
        btnClass="hide"
      />
      <ContactBefore />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;

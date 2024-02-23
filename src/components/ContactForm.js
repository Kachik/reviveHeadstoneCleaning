import { useRef } from "react";
import "./ContactFormStyles.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4wyz7l",
        "template_xo1vb3g",
        form.current,
        "NDrWK66nn5CdMo912",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <p>
        If you are unable to call at (626) 375-4450, feel free to send us an
        email below and we will get back to you right away.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="user_name" />
        <input placeholder="Email" type="email" name="user_email" />
        <input placeholder="Phone Number" name="user_number" />
        <textarea placeholder="Message" rows="4" name="message"></textarea>
        {/* <button type="button">Send Message</button> */}
        <input type="submit" value="Send" id="popUpYes" />
      </form>
    </div>
  );
}

export default ContactForm;

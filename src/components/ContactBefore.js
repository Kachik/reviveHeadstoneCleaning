import "./ContactBeforeStyles.css";

function ContactBefore() {
  return (
    <>
      <div className="contact-before">
        <h1>Reach Out For Inquiries</h1>
        <p>
          Phone: <a href="tel:1-818-945-9762">(818) 945-9762</a>{" "}
        </p>
        <p>
          Email:{" "}
          <a href="mailto:revivecleaningsprofessionals@gmail.com">
            revivecleaningsprofessionals@gmail.com
          </a>
        </p>
      </div>
      <hr width="50%" className="line-between" align="center" />
    </>
  );
}
export default ContactBefore;

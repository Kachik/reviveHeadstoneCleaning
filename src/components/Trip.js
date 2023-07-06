import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/premium_monthly.jpg";
import Trip3 from "../assets/flowers.jpg";
import PricingPage from "./PricingPage";

function Trip() {
  return (
    <div className="trip">
      <h1>Available Services</h1>
      <p>
        Only servicing Forest Lawn Cemetery in Burbank, CA. Allow 1 week after
        purschasing for cleaning. Feel free to call at (818) 945-9762 for
        special requests or for any questions.
      </p>
      <br />
      <PricingPage />
    </div>
  );
}

export default Trip;

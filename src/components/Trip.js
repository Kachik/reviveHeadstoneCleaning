import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/premium_monthly.jpg";
import Trip3 from "../assets/flowers.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Popular Services</h1>
      <p>Note that prices can be adjusted for special requests.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Deep Restoration Clean &#183; Starting $189.99"
          text="For the first timers, we recommend a deep clean with additional services that will make the headstone look brand new. Then, we can mantain the headstone on a monthly basis."
        />
        <TripData
          image={Trip2}
          heading="Monthly Cleaning &#183; $49.99"
          text="After the first clean, we are available to maintain the headstone with cleanings every month. For additional flowers, incense burning, and flower pot cleaning: +$39.99."
        />
        <TripData
          image={Trip3}
          heading="Monthly Flower Arrangement &#183; $59.99"
          text="If cleaning is not desired, we also offer monthly delivery of flowers to headstones. This includes any kind of flower and bouquet that we source from a local flower shop."
        />
      </div>
    </div>
  );
}

export default Trip;

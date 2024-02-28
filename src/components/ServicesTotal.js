import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/premium_monthly.jpg";
import Trip3 from "../assets/flowers.jpg";
import Cleaning from "../assets/cleaning.jpeg";
import Painting from "../assets/total_service.jpeg";
import TotalService from "../assets/total-serv.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Popular Services</h1>
      <p>
        Note that prices can be adjusted for special requests. Look below for
        how to schedule our services and check for additional discounts.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Deep Restoration Clean &#183; Starting $189.99"
          text="For the first timers, we recommend a deep clean that is rock specific with additional services that will make the headstone look brand new. We then recommend a monthly cleaning."
        />
        <TripData
          image={Trip2}
          heading="Monthly Cleaning &#183; $59.99"
          text="After the first clean, we are available to maintain the headstone with cleanings every month. For additional flowers, grass cutting, incense burning, and flower pot cleaning: +$39.99."
        />
        <TripData
          image={Trip3}
          heading="Monthly Flower Arrangement &#183; $74.99"
          text="If cleaning is not desired, we also offer monthly delivery of flowers to headstones. This includes any kind of flower and bouquet that we source from a local flower shop."
        />
      </div>
      <div className="tripcard">
        <TripData
          image={Cleaning}
          heading="Crack and Stone Repair &#183; Contact for Pricing"
          text="After some time, the headstone is prone to cracks and color fading. With safe and lasting chemicals and stone, we repair the headstone and clean to look as good as new."
        />
        <TripData
          image={Painting}
          heading="Letter Coloring &#183; Contact for Pricing"
          text="The color on headstone lettering fades no matter the material used. When cleaning is not able to rejuvinate the headstone, it is important to repaint the lettering before cleaning so the headstone looks good as new."
        />
        <TripData
          image={TotalService}
          heading="Full Subscription Service &#183; $109.99 + $59.99 Monthly"
          text="For the deep renovation and monthly cleanings, we offer a $80 discount on the first clean with the first year of monthly cleanings paid."
        />
      </div>
    </div>
  );
}

export default Trip;

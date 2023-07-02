import Dest1 from "../assets/1.jpg";
import Dest2 from "../assets/2.jpg";
import Dest3 from "../assets/3.jpg";
import Dest4 from "../assets/4.jpg";
import Dest5 from "../assets/aram_working_on_grave.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <DestinationData
        heading="Revive. Deep Clean"
        className="first-des"
        text="We offer a professional deep cleaning service for headstones of all types. Our team of experienced cleaners will remove all dirt, grime, and lichen from your headstone, leaving it looking like new. We use gentle, non-abrasive cleaners that will not damage your headstone. We also offer a variety of other headstone cleaning services, including regular cleanings, emergency cleanings,repainting of letters, repair of damaged headstones."
        img1={Dest1}
        img2={Dest2}
      />
      <DestinationData
        heading="Revive. Monthly Clean"
        className="first-des-reverse"
        text="To ensure headstones remain clean and prestine, we offer a competitively priced monthly cleaning service. 
        This includes trimming the grass around the headstone, oiling, brushing, and reviving the headstone,
        replacing water and leaving flowers, and more! Check out our services page for additional information."
        img1={Dest3}
        img2={Dest5}
      />
    </div>
  );
};

export default Destination;

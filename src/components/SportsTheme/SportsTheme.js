import TSN1 from "../../assets//showIcons/TSN1.png";
import TSN2 from "../../assets//showIcons/TSN2.png";
import TSN3 from "../../assets//showIcons/TSN3.png";
import { motion } from "framer-motion";

function SportsTheme() {
  return (
    <>
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <button>Add to cart</button>
      </div>
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <button>Add to cart</button>
      </div>
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <button>Add to cart</button>
      </div>
    </>
  );
}
export default SportsTheme;

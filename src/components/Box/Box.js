import TSN from "../../assets//showIcons/TSN1.png";
import "./Box.scss";

function Box() {
  return (
    <div className="box">
      <img className="box--img" src={TSN} alt="tsn 1 logo" />
      <img className="box--img" src={TSN} alt="tsn 1 logo" />
      <img className="box--img" src={TSN} alt="tsn 1 logo" />
      <p>Add to cart</p>
    </div>
  );
}
export default Box;

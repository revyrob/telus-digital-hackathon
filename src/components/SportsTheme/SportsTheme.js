import TSN1 from "../../assets//showIcons/TSN1.png";
import TSN2 from "../../assets//showIcons/TSN2.png";
import TSN3 from "../../assets//showIcons/TSN3.png";

function SportsTheme() {
  return (
    <section className="box__wrapper">
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </div>
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </div>
      <div className="box">
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </div>
    </section>
  );
}
export default SportsTheme;

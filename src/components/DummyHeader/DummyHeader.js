import dummyheader from "../../assets/headerImg/telus-nav-bar.png";
import "./DummyHeader.scss";

function DummyHeader() {
  return (
    <img
      className="dummyHeader"
      src={dummyheader}
      alt={"picture of telus logo"}
    />
  );
}
export default DummyHeader;

import TSN from "../../assets//showIcons/TSN1.png";
import { useState } from "react";

export default function ThemeDrop() {
  const [isShown, setIsShown] = useState(false);
  const showInfo = (e) => {
    //when you click on this button it will show
    //the info for this button
    setIsShown((current) => !current);
  };
  return (
    <section className="categories">
      <button onClick={showInfo}>Movies Series</button>
      <button>Sports Outdoors</button>
      <button>Entertainment</button>
      <button>Family Kids</button>

      {isShown && <Box />}
    </section>
  );
}

function Box() {
  return (
    <div>
      <img src={TSN} alt="tsn 1 logo" />
    </div>
  );
}

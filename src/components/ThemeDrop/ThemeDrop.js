import { useState } from "react";
import Box from "../Box/Box";

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
      <button onClick={showInfo}>Sports Outdoors</button>
      <button onClick={showInfo}>Entertainment</button>
      <button onClick={showInfo}>Family Kids</button>

      {isShown && <Box />}
    </section>
  );
}

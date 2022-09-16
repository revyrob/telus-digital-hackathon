import TSN1 from "../../assets//showIcons/TSN1.png";
import TSN2 from "../../assets//showIcons/TSN2.png";
import TSN3 from "../../assets//showIcons/TSN3.png";
import { motion } from "framer-motion";

function SportsTheme() {
  return (
    <section className="box__wrapper">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </motion.div>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <img className="box--img" src={TSN1} alt="tsn 1 logo" />
        <img className="box--img" src={TSN2} alt="tsn 1 logo" />
        <img className="box--img" src={TSN3} alt="tsn 1 logo" />
        <p>Add to cart</p>
      </motion.div>
    </section>
  );
}
export default SportsTheme;

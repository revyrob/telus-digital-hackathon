import { useState } from "react";
import "./ThemeCard.scss";
import selectOff from "../../assets/buttonIcons/selectOff.svg";
import selectOn from "../../assets/buttonIcons/selectOn.svg";
import { motion } from "framer-motion";

function ThemeCard({ header, description, image }) {
  const [selected, setSelected] = useState(false);

  function onSelect() {
    setSelected(!selected);
  }

  return (
    <div
      className={`theme-card-wrapper ${
        selected === false ? "" : "theme-card-wrapper--selected"
      }`}
      onClick={onSelect}
    >
      <motion.article
        className="box__wrapper"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 7,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
      >
        <div className={`theme-card theme-card--${header}`}>
          <h2 className="theme-card__header">{header}</h2>
          <p className="theme-card__description">{description}</p>
          <img className="theme-card__image" src={image} />
          <button className="theme-card__button">
            {selected === false ? (
              <img src={selectOff} />
            ) : (
              <img src={selectOn} />
            )}
          </button>
        </div>
      </motion.article>
    </div>
  );
}

export default ThemeCard;

import { useState } from "react";
import { act } from "react-dom/test-utils";
import "./ThemeSelection.scss";
import { motion } from "framer-motion";

function ThemeSelection() {
  const [activeTheme, setActiveTheme] = useState(null);
  const [cart, setCart] = useState(0);

  function showInfo(category) {
    console.log(category);
    setActiveTheme(category);
  }

  function seletedBox(theme) {
    console.log(theme);
    setCart(theme);
  }

  return (
    <section className="categories">
      <button onClick={() => showInfo("movie")}>Movies Series</button>
      <button onClick={() => showInfo("sports")}>Sports Outdoors</button>
      <button onClick={() => showInfo("entertainment")}>Entertainment</button>
      <button onClick={() => showInfo("kids")}>Family Kids</button>

      {activeTheme !== "movie" ? (
        <></>
      ) : (
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
          <div className="movie__box">Movies box 1</div>
          <div className="movie__box">Movies box 2</div>
          <div className="movie__box">Movies box 3</div>
        </motion.article>
      )}
      {activeTheme !== "sports" ? (
        <></>
      ) : (
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
          <div className="sports__box">Sports box 1</div>
          <div className="sports__box">Sports box 2</div>
          <div className="sports__box">Sports box 3</div>
        </motion.article>
      )}
      {activeTheme !== "entertainment" ? (
        <></>
      ) : (
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
          <div className="entertainment__box">Entertainment box 1</div>
          <div className="entertainment__box">Entertainment box 2</div>
          <div className="entertainment__box">Entertainment box 3</div>
        </motion.article>
      )}
      {activeTheme !== "kids" ? (
        <></>
      ) : (
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
          <div className="kids__box">Kids box 1</div>
          <div className="kids__box">Kids box 2</div>
          <div className="kids__box">Kids box 3</div>
        </motion.article>
      )}
    </section>
  );
}

export default ThemeSelection;

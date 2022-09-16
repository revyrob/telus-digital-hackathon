import { useState } from "react";
import MovieTheme from "../MovieTheme/MovieTheme";
import SportsTheme from "../SportsTheme/SportsTheme";
import { motion } from "framer-motion";
import TSN1 from "../../assets//showIcons/TSN1.png";
import TSN2 from "../../assets//showIcons/TSN2.png";
import TSN3 from "../../assets//showIcons/TSN3.png";
import "./ThemeDrop.scss";

function ThemeSelection() {
  const [activeTheme, setActiveTheme] = useState(null);
  const [cart, setCart] = useState(0);
  const [theme1, setThemes1] = useState(null);
  const [theme, setThemes] = useState(null);

  function showInfo(category) {
    console.log(category);
    setActiveTheme(category);
  }

  function seletedBox(theme) {
    setThemes(theme);
    //change classname to show selected item
    setCart(cart + 1);
    console.log(cart);
    if (cart > 3) {
      alert("you have reached the total themes");
    }
  }

  return (
    <section className="themeDrop">
      {/* <div>
        <p>Here is the counter for the shopping cart</p>
        <p>{cart}</p>
      </div> */}

      <h2 className="themeDrop__title">Explore Categories</h2>
      <div className="themeDrop__wrapper">
        <button className="themeDrop__btn" onClick={() => showInfo("movie")}>
          Movies &amp Series
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("sports")}>
          Sports &amp Outdoors
        </button>

        <button
          className="themeDrop__btn"
          onClick={() => showInfo("entertainment")}
        >
          Entertainment
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("kids")}>
          Family Kids
        </button>

        <button
          className="themeDrop__btn"
          onClick={() => showInfo("education")}
        >
          Education &amp Documentary
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("news")}>
          News
        </button>

        <button
          className="themeDrop__btn"
          onClick={() => showInfo("south africa")}
        >
          South Africa
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("chinese")}>
          Chinese
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("french")}>
          French
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("filipino")}>
          Filipino
        </button>

        <button
          className="themeDrop__btn"
          onClick={() => showInfo("international")}
        >
          International
        </button>

        <button className="themeDrop__btn" onClick={() => showInfo("variety")}>
          Talk Show &amp Variety
        </button>
      </div>
      {activeTheme !== "education" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "news" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "south africa" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "chinese" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "french" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "filipino" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "international" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
      {activeTheme !== "variety" ? (
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
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("scary")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("romantic")}>+ Add</button>
          </div>
          <div className="box">
            <img className="box--img" src={TSN1} alt="tsn 1 logo" />
            <img className="box--img" src={TSN2} alt="tsn 1 logo" />
            <img className="box--img" src={TSN3} alt="tsn 1 logo" />
            <button onClick={() => seletedBox("blockbuster")}>+ Add</button>
          </div>
        </motion.article>
      )}
    </section>
  );
}

export default ThemeSelection;

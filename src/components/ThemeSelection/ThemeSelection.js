import { useState } from "react";
import { act } from "react-dom/test-utils";
import ThemeCard from "../ThemeCard/ThemeCard";
import "./ThemeSelection.scss";
import primeTime from "../../assets/cardImages/primeTime.png";
import { motion } from "framer-motion";
import popThemes from "../../assets/data/themeCards.json";

function ThemeSelection() {
  const [activeTheme, setActiveTheme] = useState(null);
  const [cart, setCart] = useState(0);
  const [popCards] = useState(popThemes);

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
      <div className="categories__header">
        <h2 className="categories__title">
          <div className="numberCircled">3</div>Choose from our{" "}
          <span className="bold">themes</span>
        </h2>
        <p className="categories__p">Most popular theme packs</p>
      </div>
      <div className="categories__cards">
        <ThemeCard item={popCards} />
        <ThemeCard
          theme={"blah"}
          header={"most-popular"}
          description={"i am so popular"}
          image={primeTime}
        />
        <ThemeCard
          theme={"blah"}
          header={"most-popular"}
          description={"i am so popular"}
          image={primeTime}
        />
        <ThemeCard
          theme={"blah"}
          header={"most-popular"}
          description={"i am so popular"}
          image={primeTime}
        />
      </div>
      <p className="categories__p--purple">Or dive deeper</p>
      <button
        onClick={() => showInfo("most-popular")}
        className="categories__button categories__button--active"
      >
        Most Popular
      </button>
      <button onClick={() => showInfo("movies")} className="categories__button">
        Movies & Series
      </button>
      <button onClick={() => showInfo("sports")} className="categories__button">
        Sports & Outdoors
      </button>
      <button
        onClick={() => showInfo("entertainment")}
        className="categories__button"
      >
        Entertainment
      </button>
      <button onClick={() => showInfo("family")} className="categories__button">
        Family & Kids
      </button>
      <button
        onClick={() => showInfo("education")}
        className="categories__button"
      >
        Education & Documentary
      </button>
      <button onClick={() => showInfo("news")} className="categories__button">
        News
      </button>
      <button
        onClick={() => showInfo("south-asian")}
        className="categories__button"
      >
        South Asian
      </button>
      <button
        onClick={() => showInfo("chinese")}
        className="categories__button"
      >
        Chinese
      </button>
      <button onClick={() => showInfo("french")} className="categories__button">
        French
      </button>
      <button
        onClick={() => showInfo("filipino")}
        className="categories__button"
      >
        Filipino
      </button>
      <button
        onClick={() => showInfo("international")}
        className="categories__button"
      >
        International
      </button>
      <button
        onClick={() => showInfo("talk-show")}
        className="categories__button"
      >
        Talk Show & Variety
      </button>

      {/* switch (activeTheme) {
                case "most-popular":
                    <div className='most-popular__card'>Most Popular card 1</div>
                    <div className='most-popular__card'>Most Popular card 2</div>
                    <div className='most-popular__card'>Most Popular card 3</div>
                    
                    break;
                    
                case "moveis":
                    <div className='movies__card'>Movies card 1</div>
                    <div className='movies__card'>Movies card 2</div>
                    <div className='movies__card'>Movies card 3</div>

            
                default:
                    break;
            } */}

      <ThemeCard
        theme={"blah"}
        header={"most-popular"}
        description={"i am so popular"}
        image={primeTime}
      />

      {activeTheme !== "most-popular" ? (
        <></>
      ) : (
        <>
          <div className="most-popular__card">Most Popular card 1</div>
          <div className="most-popular__card">Most Popular card 2</div>
          <div className="most-popular__card">Most Popular card 3</div>
        </>
      )}
      {activeTheme !== "movies" ? (
        <></>
      ) : (
        <>
          <div className="movies__card">Movies card 1</div>
          <div className="movies__card">Movies card 2</div>
          <div className="movies__card">Movies card 3</div>
        </>
      )}
      {activeTheme !== "sports" ? (
        <></>
      ) : (
        <>
          <div className="sports__card">Sports card 1</div>
          <div className="sports__card">Sports card 2</div>
          <div className="sports__card">Sports card 3</div>
        </>
      )}
      {activeTheme !== "entertainment" ? (
        <></>
      ) : (
        <>
          <div className="entertainment__card">Entertainment card 1</div>
          <div className="entertainment__card">Entertainment card 2</div>
          <div className="entertainment__card">Entertainment card 3</div>
        </>
      )}
      {activeTheme !== "family" ? (
        <></>
      ) : (
        <>
          <div className="family__card">Family card 1</div>
          <div className="family__card">Family card 2</div>
          <div className="family__card">Family card 3</div>
        </>
      )}
    </section>
  );
}

export default ThemeSelection;

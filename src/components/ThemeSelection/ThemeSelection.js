import { useState } from "react";
import { act } from "react-dom/test-utils";
import ThemeCard from "../ThemeCard/ThemeCard";
import "./ThemeSelection.scss";
import primeTime from '../../assets/cardImages/primeTime.png';
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
        <section className='categories'>
            <button onClick={() => showInfo('most-popular')} className='categories__button categories__button--active'>Most Popular</button>
            <button onClick={() => showInfo('movies')} className='categories__button'>Movies & Series</button>
            <button onClick={() => showInfo('sports')} className='categories__button'>Sports & Outdoors</button>
            <button onClick={() => showInfo('entertainment')} className='categories__button'>Entertainment</button>
            <button onClick={() => showInfo('family')} className='categories__button'>Family & Kids</button>
            <button onClick={() => showInfo('education')} className='categories__button'>Education & Documentary</button>
            <button onClick={() => showInfo('news')} className='categories__button'>News</button>
            <button onClick={() => showInfo('south-asian')} className='categories__button'>South Asian</button>
            <button onClick={() => showInfo('chinese')} className='categories__button'>Chinese</button>
            <button onClick={() => showInfo('french')} className='categories__button'>French</button>
            <button onClick={() => showInfo('filipino')} className='categories__button'>Filipino</button>
            <button onClick={() => showInfo('international')} className='categories__button'>International</button>
            <button onClick={() => showInfo('talk-show')} className='categories__button'>Talk Show & Variety</button>





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
                header={'Prime Time'}
                description={' Hit series to critically-acclaimed original movies and drama'}
                image={primeTime}
            />
        
                {(activeTheme !== 'most-popular') ? <></> :
                    <>
                        <div className='most-popular__card'>Most Popular card 1</div>
                        <div className='most-popular__card'>Most Popular card 2</div>
                        <div className='most-popular__card'>Most Popular card 3</div>
                    </>
                }
                {(activeTheme !== 'movies') ? <></> :
                    <>
                        <div className='movies__card'>Movies card 1</div>
                        <div className='movies__card'>Movies card 2</div>
                        <div className='movies__card'>Movies card 3</div>
                    </>
                }
                {(activeTheme !== 'sports') ? <></> :
                    <>
                        <div className='sports__card'>Sports card 1</div>
                        <div className='sports__card'>Sports card 2</div>
                        <div className='sports__card'>Sports card 3</div>
                    </>
                }
                {(activeTheme !== 'entertainment') ? <></> :
                    <>
                        <div className='entertainment__card'>Entertainment card 1</div>
                        <div className='entertainment__card'>Entertainment card 2</div>
                        <div className='entertainment__card'>Entertainment card 3</div>
                    </>
                }
                {(activeTheme !== 'family') ? <></> :
                    <>
                        <div className='family__card'>Family card 1</div>
                        <div className='family__card'>Family card 2</div>
                        <div className='family__card'>Family card 3</div>
                    </>
                }
        </section>
    )

}

export default ThemeSelection;

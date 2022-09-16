import { useState } from 'react';
import { act } from 'react-dom/test-utils';
import './ThemeSelection.scss';

function ThemeSelection() {

    const [activeTheme, setActiveTheme] = useState(null);

    function showInfo(category) {
        console.log(category);
        setActiveTheme(category);
    }

    return (
        <section className='categories'>
            <button onClick={() => showInfo('movie')}>Movies Series</button>
            <button onClick={() => showInfo('sports')}>Sports Outdoors</button>
            <button onClick={() => showInfo('entertainment')}>Entertainment</button>
            <button onClick={() => showInfo('kids')}>Family Kids</button>

            {(activeTheme !== 'movie') ? <></> :
                <>
                    <div className='movie__box'>Movies box 1</div>
                    <div className='movie__box'>Movies box 2</div>
                    <div className='movie__box'>Movies box 3</div>
                </>
            }
            {(activeTheme !== 'sports') ? <></> :
                <>
                    <div className='sports__box'>Sports box 1</div>
                    <div className='sports__box'>Sports box 2</div>
                    <div className='sports__box'>Sports box 3</div>
                </>

            }
            {(activeTheme !== 'entertainment') ? <></> :
                <>
                    <div className='entertainment__box'>Entertainment box 1</div>
                    <div className='entertainment__box'>Entertainment box 2</div>
                    <div className='entertainment__box'>Entertainment box 3</div>
                </>
            }
            {(activeTheme !== 'kids') ? <></> :
                <>
                    <div className='kids__box'>Kids box 1</div>
                    <div className='kids__box'>Kids box 2</div>
                    <div className='kids__box'>Kids box 3</div>
                </>
            }
        </section>
    )
}

export default ThemeSelection;
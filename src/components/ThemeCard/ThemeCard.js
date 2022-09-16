import { useState } from 'react';
import './ThemeCard.scss';
import selectOff from '../../assets/buttonIcons/selectOff.svg';
import selectOn from '../../assets/buttonIcons/selectOn.svg'

function ThemeCard( { header, description, image } ) {

    const [selected, setSelected] = useState(false);

    function onSelect() {
        setSelected(!selected);
    }

    return (
        <div className={`card card--${header}`}>
            <h2 className='card__header'>{header}</h2>
            <p className='card__description'>{description}</p>
            <img className='card__image' src={image} />
            <button className='card__button' onClick={onSelect}>
                {selected === false ? <img src={selectOff} /> : <img src={selectOn} />}
            </button>
        </div>
    )
}

export default ThemeCard;
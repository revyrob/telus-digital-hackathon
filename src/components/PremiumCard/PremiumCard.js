import './PremiumCard.scss';
import { useState } from 'react';
import selectOff from "../../assets/buttonIcons/selectOff.svg";
import selectOn from "../../assets/buttonIcons/selectOn.svg";

function PremiumCard({ header, description, image }) {
    
    const [selected, setSelected] = useState(false);

    function onSelect() {
        setSelected(!selected);
    }

    return (
        <div className={`premium-card-wrapper ${selected === false ? "" : "premium-card-wrapper--selected"}`} onClick={onSelect}>
            <div className={`premium-card premium-card--${header}`}>
                <h2 className='premium-card__header'>{header}</h2>
                <p className='premium-card__description'>{description}</p>
                <img className='premium-card__image' src={image} />
                <button className='premium-card__button'>
                    {selected === false ? <img src={selectOff} /> : <img src={selectOn} />}
                </button>
            </div>
        </div>
    )
}

export default PremiumCard;
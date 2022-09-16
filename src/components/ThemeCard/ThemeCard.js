import { useState } from "react";
import "./ThemeCard.scss";
import selectOff from "../../assets/buttonIcons/selectOff.svg";
import selectOn from "../../assets/buttonIcons/selectOn.svg";

function ThemeCard({ header, description, image }) {
    const [selected, setSelected] = useState(false);

    function onSelect() {
        setSelected(!selected);
    }

    return (
        <div className={`theme-card-wrapper ${selected === false ? "" : "theme-card-wrapper--selected"}`} onClick={onSelect}>
            <div className={`theme-card theme-card--${header}`}>
                <h2 className='theme-card__header'>{header}</h2>
                <p className='theme-card__description'>{description}</p>
                <img className='theme-card__image' src={image} />
                <button className='theme-card__button'>
                    {selected === false ? <img src={selectOff} /> : <img src={selectOn} />}
                </button>
            </div>
        </div>
    )
}

export default ThemeCard;

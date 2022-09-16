import "./ChannelsCard.scss";
import { useState } from "react";
import selectOff from "../../assets/buttonIcons/selectOff.svg";
import selectOn from "../../assets/buttonIcons/selectOn.svg";

function ChannelsCard({ header, description, image, onclickEvent }) {
  const [selected, setSelected] = useState(false);

  function onSelect() {
    setSelected(!selected);
  }

  return (
    <div
      className={`channels-card-wrapper ${
        selected === false ? "" : "channels-card-wrapper--selected"
      }`}
      onClick={onSelect}
    >
      <div className={`channels-card channels-card--${header}`}>
        <img className="channels-card__image" src={image} />
        <h2 className="channels-card__header">{header}</h2>
        <p className="channels-card__description">{description}</p>
        <button className="channels-card__button">
          {selected === false ? (
            <img src={selectOff} />
          ) : (
            <img src={selectOn} />
          )}
          onClick={onclickEvent}
        </button>
      </div>
    </div>
  );
}

export default ChannelsCard;

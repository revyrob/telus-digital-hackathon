import './Popup.scss';
import gif from '../../assets/modal.gif';

function Popup() {
    return (
        <div className='popup-wrapper'>
            <div className='popup'>
                <h2 className='popup__header'>We got your back</h2>
                <p className='popup__p'>Don’t settle for less when you can have this much fun. Simply select “Choices for everyone” or “Endless options for all” packages and enjoy limitless fun with your loved one.</p>
                <img className='popou_gif' src={gif} alt='show gif'/>
            </div>
        </div>
    )
}

export default Popup;
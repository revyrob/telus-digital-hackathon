import './Header.scss';
import headerImg from '../../assets/telus-header.png';

function Header() {

    return (
        <div className="header">
            <img src={headerImg} alt='' className='header__img'></img>
        </div>
    )
}

export default Header;
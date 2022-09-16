import './Header.scss';

function Header() {

    return (
        <div className="header-wrapper">
            <header className="header">
                <Link to="/" >
                    <img className="header__logo" src={logo} alt='logo' />
                </ Link>
                <div className="header__right">
                    <input className="header__search" type="text" name="search" placeholder="Search" />
                    <ProfilePic pic={profPic} />
                    <Link to='/upload' >
                        <Button icon={uploadIcon} text="upload" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header;
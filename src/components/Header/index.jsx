import "./Header.scss";

function Header({ title }) {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>

            <div className="header__menu-wrapper">
                <ul className="header__menu">
                    <li className="header__menu-item">Songs</li>

                    <li className="header__menu-item">Login</li>

                    <li className="header__menu-item">About</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;

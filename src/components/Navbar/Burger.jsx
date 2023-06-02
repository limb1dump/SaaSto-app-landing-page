import './Navbar.scss'


const Burger = ({ openBurger, toggleBurger }) => {
    return (
        <div className="navbar__burger">
            <div className="navbar__burger-wrap">
                <div
                    className={`${toggleBurger ? 'navbar__burger-field active' : 'navbar__burger-field'}`}
                    onClick={openBurger}
                >
                    <div className="navbar__burger-line"></div>
                    <div className="navbar__burger-line"></div>
                    <div className="navbar__burger-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Burger;
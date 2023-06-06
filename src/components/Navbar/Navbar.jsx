import './Navbar.scss'
import { images } from '../../constants';
import Button from '../Button/Button';
import Burger from './Burger';
import { useState } from 'react';
import '../../assets/container.scss'


const Navbar = () => {
    const menu = ['Demos', 'Features', 'Pricing', 'Contact'];
    const [toggleBurger, setToggleBurger] = useState(false);

    const openBurger = () => {
        setToggleBurger(!toggleBurger);
        document.body.classList.toggle("no-scroll"); //in this case i'm not manipulating the DOM that React is rendering, i'm manipulating its parent, so it's ok to use such line
    }

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar__row'>
                    <div className="navbar__logo">
                        <div className="navbar__icon">
                            <img src={images.logoIcon} alt='logo' />
                        </div>
                        <div className="navbar__title">
                            <img src={images.logoTitle} alt='logo' />
                        </div>
                    </div>
                    <ul className="navbar__nav-list">
                        {menu.map(item => (
                            <li key={`link-${item}`}>
                                <div />
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__enter">
                        <a href="" className="navbar__login">Login</a>
                        <Button>Sign up</Button>
                    </div>
                    <Burger openBurger={openBurger} toggleBurger={toggleBurger} />
                    <div
                        className={`${toggleBurger ? 'navbar__burger-menu active' : 'navbar__burger-menu'}`}
                    >
                        <ul className="navbar__burger-nav-list">
                            {menu.map(item => (
                                <li key={`id-${item}`}>
                                    <div />
                                    <a href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="navbar__burger-enter">
                            <a href="" className="navbar__login">Login</a>
                            <Button>Sign up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
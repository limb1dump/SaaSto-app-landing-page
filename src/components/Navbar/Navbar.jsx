import './Navbar.scss'
import { images } from '../../constants';
import Button from '../Button/Button';

const Navbar = () => {
    const menu = ['Demos', 'Features', 'Pricing', 'Contact']

    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <div className="navbar__icon">
                    <img src={images.logoIcon} alt='logo' />
                </div>
                <div className="navbar__title">
                    <img src={images.logoTitle} alt='logo' />
                </div>
            </div>
            <ul className="navbar__menu">
                {menu.map(item => (
                    <li className="navbar__list-item" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="navbar__enter">
                <a href="" className="navbar__login">Login</a>
                <Button btnClass={'btn'}>Sign up</Button>
            </div>
        </nav>
    );
};

export default Navbar;
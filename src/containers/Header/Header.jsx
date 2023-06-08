import Button from '../../components/Button/Button';
import '../../assets/container.scss'
import './Header.scss'


const Header = () => {
    return (
        <div className='header__wrapper'>
            <div className='header'>
                <div className='container header__container '>
                    <div className="header__body">
                        <h1 className="header__title">
                            A collaborative Time Tracking that you Need
                        </h1>
                        <p className="header__text">
                            An enim nullam tempor sapien gravida donec enim ipsum porta justo &nbsp;congue magna at pretium purus pretium ligula
                        </p>
                        <div className="header__btn-wrapper">
                            <Button className="btn-header">
                                Start 14 Days Trial
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
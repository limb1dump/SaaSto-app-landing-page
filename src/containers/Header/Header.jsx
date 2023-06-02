import Button from '../../components/Button/Button';
import '../../assets/container.scss'
import './Header.scss'
import { images } from '../../constants';



const Header = () => {
    return (
        <div className='header'>
            <div className="header__shapes">
                <div className="header__sinus">
                    <img src={images.sinus} alt="shape" />
                </div>
                <div className="header__curves">
                    <img src={images.curves} alt="lines" />
                </div>
                <div className="header__sharp-sinus">
                    <img src={images.sharpSinus} alt="shape" />
                </div>
                <div className="header__thick">
                    <img src={images.thick} alt="shape" />
                </div>
                <div className="header__dimond">
                    <img src={images.diamond} alt="shape" />
                </div>
                <div className="header__arrow-loop">
                    <img src={images.arrowLoop} alt="shape" />
                </div>
            </div>
            <div className='container header__container '>
                <div className="header__body">
                    <h1 className="header__title">
                        A collaborative Time Tracking that you Need
                    </h1>
                    <p className="header_text">
                        An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
                    </p>
                    <Button btnHeader='btn-header'>
                        Start 14 Days Trial
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
import './Button.scss'


const Button = ({ children, btnMain, btnHeader, btnInverted }) => {

    if (btnMain) {
        return (
            <button className={btnMain}>
                {children}
            </button>
        );
    }

    if (btnInverted) {
        return (
            <button className={`btn ${btnInverted}`}>
                {children}
            </button>
        );
    }

    if (btnHeader) {
        return (
            <button className={`btn ${btnHeader}`}>
                {children}
            </button>
        );
    }
};

export default Button;

// {`${btnClass} ? ${btnClass} : btn-inverted`}
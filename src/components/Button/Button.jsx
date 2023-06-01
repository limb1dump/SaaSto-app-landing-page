import './Button.scss'


const Button = ({ children, btnClass }) => {
    return (
        <button className={`${btnClass ? btnClass : 'btn-inverted'}`}>
            {children}
        </button>
    );
};

export default Button;

// {`${btnClass} ? ${btnClass} : btn-inverted`}
import classes from './Title.module.scss'

const Title = ({ children, align = "center", size = "large" }) => {
    return (
        <h2 className={`${classes[`large`]} ${classes[align]} ${classes[size]}`}>
            {children}
        </h2>
    );
};

export default Title;
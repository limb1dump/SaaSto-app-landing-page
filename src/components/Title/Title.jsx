import classes from './Title.module.scss'

const Title = ({ children, mode = "" }) => {
    return (
        <h2 className={`${classes[`large`]} ${classes[mode]}`}>
            {children}
        </h2>
    );
};

export default Title;
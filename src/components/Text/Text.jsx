import classes from './Text.module.scss'


const Text = ({ children, mode = '' }) => {
    return (
        <p className={`${classes['normal']} ${classes[mode]}`}>
            {children}
        </p>
    );
};

export default Text;
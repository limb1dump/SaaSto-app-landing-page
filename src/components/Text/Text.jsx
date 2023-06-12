import classes from './Text.module.scss'


const Text = ({ children, align = 'center', size = 'normal' }) => {
    return (
        <p className={`${classes['normal']} ${classes[align]} ${classes[size]}`}>
            {children}
        </p>
    );
};

export default Text;
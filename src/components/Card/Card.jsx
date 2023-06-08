import classes from './Card.module.scss'


const Card = ({ title, text, img, color = '', size = 'large' }) => {
    return (
        <div className={`${classes.large} ${classes[color]} ${classes[size]}`}>
            <div className={`${classes.large__icon} ${classes[`${size}__icon`]}`}>
                <img src={img} alt='' />
            </div>
            <h3 className={`${classes.large__title} ${classes[`${size}__title`]}`}>
                {title}
            </h3>
            <p className={`${classes.large__text} ${classes[`${size}__text`]}`}>
                {text}
            </p>
        </div>
    );
};

export default Card;
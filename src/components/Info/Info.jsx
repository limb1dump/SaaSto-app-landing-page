import classes from './Info.module.scss'


const Info = ({ title, text, img, size = "normal", color = 'violet' }) => {
    return (
        <div className={`${classes.normal} ${classes[size]}`}>
            <div className={`${classes.normal__img} ${classes[`${size}__img`]} ${classes[color]}`}>
                <img src={img} alt="icon" />
            </div>
            <div className={`${classes.normal__body} ${classes[`${size}__body`]}`}>
                <h4 className={`${classes.normal__title} ${classes[`${size}__title`]}`}>
                    {title}
                </h4>
                <p className={`${classes.normal__text} ${classes[`${size}__text`]}`}>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Info;
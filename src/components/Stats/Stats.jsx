import classes from "./Stats.module.scss"

const Stats = ({ name, count, className = "", mode = 'default' }) => {

    return (
        <div className={`${classes[mode]} ${className}`}>
            <div className={classes[`${mode}__count`]}>{count}</div>
            <div className={classes[`${mode}__name`]}>{name}</div>
        </div>
    );
};

export default Stats;

// `${default__count}`
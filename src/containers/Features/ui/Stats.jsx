import classes from './Stats.module.scss'

const Stats = ({ name, count, className = '' }) => {

    return (
        <div className={`${classes.stat} ${className}`}>
            <div className={classes.stat__count}>{count}</div>
            <div className={classes.stat__name}>{name}</div>
        </div>
    );
};

export default Stats;
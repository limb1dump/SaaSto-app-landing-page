import Info from '../../components/Info/Info';
import './Analytics.scss'
import { images } from '../../constants';
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';

const analytics = [
    {
        title: "Automatic event tracking",
        text: "Time Tracking is never been easier. Just let the stopwatch run",
        img: images.analyticsClock,
        color: 'orange',
    },
    {
        title: "Customizable dashboard",
        text: "Time Tracking is never been easier. Just let the stopwatch run",
        img: images.analyticsDashboard,
        color: 'cyan',
    },
    {
        title: "Statistics retroactively",
        text: "Time Tracking is never been easier. Just let the stopwatch run",
        img: images.analyticsCalendar,
        color: 'yellow',
    },
]

const Analytics = () => {
    return (
        <div className='analytics'>
            <div className="container analytics__container">
                <div className="analytics__row">
                    <div className="analytics__image">
                        <img src={images.analyticsMobileScreen} alt='smartphone' />
                    </div>
                    <div className="analytics__body">
                        <div className="analytics__title">
                            <Title align='left'>
                                Analytics & Reporting Brackdown
                            </Title>
                        </div>
                        <div className="analytics__subtitle">
                            <Text align='left'>
                                An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula
                            </Text>
                        </div>
                        <div className="analytics__features">
                            {
                                analytics.map(item => (
                                    <Info
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        color={item.color}
                                        key={item.title}
                                        size="normal"
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="analytics__body-small">
                        <div className="analytics__title">
                            <Title align='left' size='small'>
                                Analytics & Reporting Brackdown
                            </Title>
                        </div>
                        <div className="analytics__subtitle">
                            <Text align='left' size='small'>
                                An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula
                            </Text>
                        </div>
                        <div className="analytics__features">
                            {
                                analytics.map(item => (
                                    <Info
                                        img={item.img}
                                        title={item.title}
                                        text={item.text}
                                        color={item.color}
                                        key={item.title}
                                        size="small"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import './Features.scss'
import Stats from '../../components/Stats/Stats';
import Card from '../../components/Card/Card';
import { images } from '../../constants';

//---------------data---------------
const stats = [
    { name: 'Active user', count: '15k+' },
    { name: 'Total Download', count: '30k' },
    { name: 'Customer', count: '10k' }
]

const cards = [
    {
        title: 'Preset List of Task',
        text: 'Make bill payments easily using the wallet app',
        img: images.featureTaskList,
        color: 'cyan'
    },
    {
        title: 'Reminder of Task',
        text: 'Make bill payments easily using the wallet app',
        img: images.featureBell,
        color: 'violet'
    },
    {
        title: 'Complecation Report',
        text: 'Make bill payments easily using the wallet app',
        img: images.featureAgenda,
        color: 'orange'
    }
]

const Features = () => {
    return (
        <div className='features'>
            <div className="container">
                <div className="features__body">
                    <div className="features__stats-row">
                        {stats.map((item) => {
                            return (
                                <Stats
                                    className="features__stats"
                                    key={item.name}
                                    name={item.name}
                                    count={item.count}
                                />)
                        })}
                    </div>
                    <div className="features__stats-row-mobile">
                        {stats.map((item) => {
                            return (
                                <Stats
                                    className="features__stats-mobile"
                                    mode='large'
                                    key={item.name}
                                    name={item.name}
                                    count={item.count}
                                />)
                        })}
                    </div>
                    <div className='features__title-container'>
                        <Title mode='large'>Some excellent features for you</Title>
                    </div>
                    <div className='features__title-container-mobile'>
                        <Title mode='small'>Some excellent features for you</Title>
                    </div>
                    <div className="features__text">
                        <Text>
                            An enim nullam tempor sapien gravida donec enim ipsum porta justo&nbsp;  congue magna at pretium purus pretium ligula
                        </Text>
                    </div>
                    <div className="features__text-mobile">
                        <Text mode='small'>
                            An enim nullam tempor sapien gravida donec enim ipsum porta justo&nbsp;  congue magna at pretium purus pretium ligula
                        </Text>
                    </div>
                    <div className="features__card-row">
                        {
                            cards.map(item =>
                            (<Card
                                key={item.title}
                                title={item.title}
                                text={item.text}
                                img={item.img}
                                color={item.color}
                            />)
                            )
                        }
                    </div>
                    <div className="features__card-row-mobile">
                        {
                            cards.map(item =>
                            (<Card
                                key={item.title}
                                title={item.title}
                                text={item.text}
                                img={item.img}
                                color={item.color}
                                size='small'
                            />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
import './Features.scss'
import Stats from './ui/Stats';
const stats = [
    { name: 'Active user', count: '15k+' },
    { name: 'Total Download', count: '30k' },
    { name: 'Customer', count: '10k' }
]

const Features = () => {
    return (
        <div className='features'>
            <div className="container">
                <div className="features__body">
                    <div className="features__stat-row">
                        {stats.map((item) => {
                            return (<Stats className="features__stats" key={item.name} name={item.name} count={item.count}></Stats>)
                        })}
                    </div>
                    <h2 className="features__title"></h2>
                    <p className="features__text"></p>
                    <div className="features__card-row">
                        <div className="features__card"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
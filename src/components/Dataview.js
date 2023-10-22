import DataCard from './Datacard'
import './dataview.css'

const Dataview = () => {

    const cardData = [
        { title: 'Steps', endpoint: '/current_steps' },
        { title: 'Heartrate', endpoint: '/daily_avg_heart_rate' },
        { title: 'Stress', endpoint: '/daily_max_stress' },
        { title: 'Mood', endpoint: '/daily_mood' },
    ];

    return (
        <div className="data-card-container">
            {cardData.map(card => <DataCard key={card.title} title={card.title} endpoint={card.endpoint} />)}
        </div>
    );
};

export default Dataview
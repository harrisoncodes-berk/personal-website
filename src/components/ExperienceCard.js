import '../css/ExperienceCard.css';

function ExperienceCard({ image, company, position, dates, description }) {
    return (
        <div className='experience-card'>
            {image}
            <h3>{company}</h3>
            <h4>{position}</h4>
            {dates}
            <p>{description}</p>
        </div>
    );
}

export default ExperienceCard;
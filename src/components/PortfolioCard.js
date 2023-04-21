import '../css/PortfolioCard.css';
import GithubIcon from '../png/icons8-github-30.png';

function PortfolioCard({ image, name, description, url }) {

    return (
        <div className='portfolio-card'>
            {image}
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={url} target='_blank' rel="noreferrer">
                <img className='icon' src={GithubIcon} alt='github icon'/>
            </a>
        </div>
    );
}

export default PortfolioCard;
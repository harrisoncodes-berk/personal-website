import PortfolioCard from "../components/PortfolioCard";
import ReactIcon from '../png/icons8-react-100.png';
import SpotifyIcon from '../png/icons8-spotify-144.png';
import CatanIcon from '../png/icons8-catan-64.png';
import '../css/PortfolioPage.css';

function PortfolioPage() {
    const renderedReact = <img className="project-img" src={ReactIcon} alt='tiktok pic'/>;
    const renderedSpotify = <img className="project-img" src={SpotifyIcon} alt='tiktok pic'/>;
    const renderedCatan = <img className="project-img" src={CatanIcon} alt='tiktok pic'/>;

    return (
        <div className='portfolio-page'>
            <div className='header'>
                <h2>Portfolio</h2>
                <hr />
            </div>
            <div className='project-list'>
                <PortfolioCard 
                    image={renderedReact}
                    name='Personal Website'
                    url='https://github.com/harrisoncodes-berk/personal-website'
                />
                <PortfolioCard 
                    image={renderedSpotify}
                    name='Spotify Playlist Creator'
                    url='https://github.com/harrisoncodes-berk'
                />
                <PortfolioCard 
                    image={renderedCatan}
                    name='Catanerator'
                    url='https://github.com/harrisoncodes-berk'
                />
            </div>
        </div>
    );
}

export default PortfolioPage;
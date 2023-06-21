import "./PortfolioPage.css";

import PortfolioCard from "../components/PortfolioCard";
import ReactIcon from "../png/icons8-react-100.png";
import SpotifyIcon from "../png/icons8-spotify-144.png";
import CatanIcon from "../png/icons8-catan-64.png";

function PortfolioPage() {
  const renderedReact = (
    <img className="project-img" src={ReactIcon} alt="tiktok pic" />
  );
  const renderedSpotify = (
    <img className="project-img" src={SpotifyIcon} alt="tiktok pic" />
  );
  const renderedCatan = (
    <img className="project-img" src={CatanIcon} alt="tiktok pic" />
  );

  return (
    <div className="portfolio-page">
      <h2>Portfolio</h2>
      <hr />
      <div className="project-list">
        <PortfolioCard
          image={renderedReact}
          name="Personal Website"
          description="This is a simple web app built with React, NodeJS, Express, and MongoDB."
          url="https://github.com/harrisoncodes-berk/personal-website"
        />
        <PortfolioCard
          image={renderedSpotify}
          name="Spotify Playlist Creator"
          description="This is a Python application that utilizes the Spotify API and EasyOCR package to read text from an image and create a playlist based on the artists."
          url="https://github.com/harrisoncodes-berk"
        />
        <PortfolioCard
          image={renderedCatan}
          name="Catanerator"
          description="This is an application to automatically generate a Catan map based on custom inputs such as 'No adjacent reds', 'Max dots per intersection', etc."
          url="https://github.com/harrisoncodes-berk"
        />
      </div>
    </div>
  );
}

export default PortfolioPage;

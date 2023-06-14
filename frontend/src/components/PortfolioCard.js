import "../css/PortfolioCard.css";
import { BsGithub } from "react-icons/bs";

function PortfolioCard({ image, name, description, url }) {
  return (
    <div className="portfolio-card">
      {image}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        <img className="icon" src={BsGithub} alt="github icon" />
      </a>
    </div>
  );
}

export default PortfolioCard;

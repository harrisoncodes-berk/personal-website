function PortfolioCard({ image, name, description }) {
    return (
        <div className='portfolio-card'>
            {image}
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default PortfolioCard;
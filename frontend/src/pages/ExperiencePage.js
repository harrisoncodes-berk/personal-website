import '../css/ExperiencePage.css';
import tiktokPic from '../png/tiktok_logo.png';
import deloittePic from '../png/deloitte_logo.png';
import gainCreditPic from '../png/gain_credit_logo.png';
import ExperienceCard from "../components/ExperienceCard";

function ExperiencePage() {
    const renderedTikTokPic = <img src={tiktokPic} alt='tiktok pic'/>;
    const renderedDeloittePic = <img src={deloittePic} alt='deloitte pic'/>;
    const renderedGainCreditPic = <img src={gainCreditPic} alt='gc pic'/>;

    return (
        <div className='experience-page'>
            <div className='header'>
                <h2>Experience</h2>
                <hr />
            </div>
            <div className='experience-list'>
                <ExperienceCard 
                    image={renderedTikTokPic} 
                    company='TikTok'
                    position='Data Scientist'
                    dates='October 2022 - Present'
                    description='I am currently a member of the Data Science team at TikTok working on the monetization of ads. In this role, I have leveraged my analytical skills, product sense, and developer skills to automate informative, in-depth analyses.'
                />
                <ExperienceCard 
                    image={renderedDeloittePic} 
                    company='Deloitte Consulting'
                    position='Solutions Engineering Analyst'
                    dates='July 2021 - October 2022'
                    description='At Deloitte, I specialized in providing data engineering and analytics services to Healthcare and Technology clients.'
                />
                <ExperienceCard 
                    image={renderedGainCreditPic} 
                    company='Gain Credit'
                    position='Data Science Intern'
                    dates='June 2020 - August 2020'
                    description='Gain Credit is a consumer short term lending company. During my summer internship with the Data Science team, I worked on building classification models to predict loan defaults.'
                />
            </div>
        </div>
    );
}

export default ExperiencePage;

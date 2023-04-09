<<<<<<< HEAD
import '../css/HomePage.css';
=======
import '../css/home-page.css';
>>>>>>> origin/main
import profilePic from '../png/pic_of_me.png';

function HomePage() {
    return (
        <div className='home-page'>
            <div className='main'>
                <div className='intro'>
                    <h2 className=''>Hey there!</h2>
                    <p className=''>
                        My name is Harry deBoer and welcome to my personal website! I created this website as a way to 
                        showcase my skills, experience, and to practice web development. This site was created using React 
                        and the code can be found in the portfolio section. If you're interested in learning more about me 
                        please read on! 
                    </p>
                </div>
                <div className='pic'>
                    <img src={profilePic} alt='' className=''/>
                </div>
            </div>
            <div className='about-me'>
                <h2 className=''>About Me</h2>
                <hr />
                <p></p>
            </div>
        </div>
    );
}

export default HomePage;
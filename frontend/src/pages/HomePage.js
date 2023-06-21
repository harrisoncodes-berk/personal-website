import "./HomePage.css";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import profilePic from "../png/pic_of_me.png";

function HomePage() {
  return (
    <div className="home-page">
      <div className="main">
        <div className="intro">
          <h1>Hi there!</h1>
          <p>
            My name is Harry deBoer and welcome to my personal website! I
            created this website as a way to showcase my skills, experience, and
            to practice web development. This site was created using React and
            the code can be found in the portfolio section. If you're interested
            in learning more about me please read on or contact me via one of
            the links below!
          </p>
          <div className="contact-links">
            <a href="mailto:harrisondeboer@berkeley.edu">
              harrisondeboer@berkeley.edu
            </a>
            <a
              href="https://github.com/harrisoncodes-berk"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harrison-deboer/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <img src={profilePic} alt="" className="" />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <hr />
        <h3>Intro</h3>
        <p>
          I am currently 24 years old and living in San Francisco. In May of
          2021, I graduated from UC Berkeley where I studied Data Science with
          an emphasis in Economics. I chose Data Science as my major because I
          love math and coding.
        </p>
        <h3>Background in CS</h3>
        <p>
          I first started coding in my AP Computer Science class sophomore year
          of highschool and instantly loved it. I really enjoy breaking down
          complex systems into manageable parts as well as using code to build
          fun and interesting projects. One of my earliest projects was using
          Swift to create a brick breaker app on my iPhone. I explored other
          subjects when I first went to college, but I am now trying to
          transition back towards a career in Software Engineering.
        </p>
        <h3>Current Status</h3>
        <p>
          Currently, I am working from home as a Data Scientist for TikTok.
          However, my dream work scenario is to work as Software Engineer in
          office for a smaller company in San Francisco. Since I do not have
          work experience as a Software Engineer, I have been working on
          projects to improve my coding skills, particularly in Full-Stack
          Development. This website, for example, is backed up by a MongoDB
          database so I can update my reading list from a program on my computer
          without having to redeploy this website.
        </p>
        <h3>Hobbies</h3>
        <p>
          Some of my favorite activities are basketball, reading, and
          boardgames/video games. I can be seeen most weekends playing pickup
          basketball at the Panhandle in San Francisco. I am also a huge NBA
          fanatic (GO WARRIORS!!!) and enjoy bothering my friends with overly
          complicated trade ideas. My favorite genres of books are science
          fiction and philosophical fiction. In the reading section of this site
          you can see some of my recent reads. As far as boardgames and video
          games go, my favorites are Catan (Cities and Knights) and Coup, and
          Rocket League and Super Smash Bros.
        </p>
      </div>
    </div>
  );
}

export default HomePage;

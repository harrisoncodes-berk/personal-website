<<<<<<< HEAD
import './css/App.css';
=======
import './css/app.css';
>>>>>>> origin/main
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import ReadingListPage from "./pages/ReadingList";
import Link from "./components/Link";
import Route from "./components/Route";

function App() {
    return (
        <div className=''>
            <div className='top-bar'>
                <h1 className=''>Harry deBoer</h1>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/reading-list'>Reading List</Link>
                </div>
            </div> 
            <Route path='/'>
                <HomePage />
            </Route>
            <Route path='/experience'>
                <ExperiencePage />
            </Route>
            <Route path='/portfolio'>
                <PortfolioPage />
            </Route>
            <Route path='/reading-list'>
                <ReadingListPage />
            </Route>
        </div>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/main

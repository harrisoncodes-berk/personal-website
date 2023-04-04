import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import ReadingListPage from "./pages/ReadingList";
import Link from "./components/Link";
import Route from "./components/Route";

function App() {
    return (
        <div className='font-serif'>
            <div className='flex justify-between items-center px-3 py-2 bg-red-100'>
                <h1 className='text-left text-3xl font-bold'>Harry deBoer</h1>
                <div className='flex justify-end gap-4 px-2 inline-block'>
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

export default App;

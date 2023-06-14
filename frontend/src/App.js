import "./css/App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import ReadingListPage from "./pages/ReadingList";
import Link from "./components/Link";
import Route from "./components/Route";

function App() {
  const [books, setBooks] = useState([]);
  const headers = [
    { name: "Title", key: "title" },
    { name: "Author", key: "author" },
    { name: "Year Read", key: "yearRead" },
    { name: "Rating", key: "rating" },
  ];

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/books"
      );
      const responseData = await response.json();
      setBooks(responseData);
    };
    sendRequest();
  }, [setBooks]);

  return (
    <div className="">
      <div className="top-bar">
        <h1 className="">Harry deBoer</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/reading-list">Reading List</Link>
        </div>
      </div>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/experience">
        <ExperiencePage />
      </Route>
      <Route path="/portfolio">
        <PortfolioPage />
      </Route>
      <Route path="/reading-list">
        <ReadingListPage books={books} headers={headers} />
      </Route>
    </div>
  );
}

export default App;

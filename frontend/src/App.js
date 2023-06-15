import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortfolioPage from "./pages/PortfolioPage";
import ReadingListPage from "./pages/ReadingList";

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
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reading-list" element={<ReadingListPage books={books} headers={headers} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

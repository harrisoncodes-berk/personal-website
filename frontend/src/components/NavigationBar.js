import { useState } from "react";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

function NavigationBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log("currentPath");

  const links = [
    { path: "/", label: "Home" },
    { path: "/experience", label: "Experience" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/reading-list", label: "Reading List" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.path}
        to={link.path}
        className={`link ${currentPath === link.path ? "active" : ""}`}
        onClick={() => setCurrentPath(link.path)}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="nav-bar">
      <h3>Harry deBoer</h3>
      <div className="nav-bar__links">
        {renderedLinks}
      </div>
    </div>
  );
}

export default NavigationBar;

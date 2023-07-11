import React from "react";
import { Link } from "react-router-dom";
import { aboutUsPath, communityPath, rootPath, sportPath } from "../routes";
import { FaTimes } from "react-icons/fa";

const Navigation = React.forwardRef(({ showNavbar, hideNavbar }, ref) => {
  return (
    <nav className="navigation" ref={ref}>
      <ul>
        <li>
          <Link to={rootPath} onClick={hideNavbar}>
            Beranda
          </Link>
        </li>
        <li>
          <Link to={sportPath} onClick={hideNavbar}>
            Olahraga
          </Link>
        </li>
        <li>
          <Link to={communityPath} onClick={hideNavbar}>
            Komunitas
          </Link>
        </li>
        <li>
          <Link to={aboutUsPath} onClick={hideNavbar}>
            Tentang Kami
          </Link>
        </li>
      </ul>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
  );
});

export default Navigation;

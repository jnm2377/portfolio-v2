import { Link } from "gatsby";
import React, { useState } from "react";
import "./header.scss";
import cx from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <nav className="header-nav">
        <button className="header-btn" onClick={handleToggle}>
          xxx
        </button>
        <ul className={cx("nav-list", { [`nav-list--active`]: isOpen })}>
          <li className="link main-link">
            <Link to="/">Josefina</Link>
          </li>
          <li className="link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

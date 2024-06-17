import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const [toggle, ShowMenu] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        ShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <aside className="aside">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>

        <nav className="nav">
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/lucylu-lucy/"
                  target="_blank"
                  className="nav-link"
                >
                  <i className="icon-social-linkedin"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="mailto:lucy.lu.forwork@gmail.com"
                  className="nav-link"
                  target="_blank"
                >
                  <i className="icon-envelope"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="+61468-960-150" className="nav-link" target="_blank">
                  <i className="icon-phone"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://github.com/xilu6510"
                  className="nav-link"
                  target="_blank"
                >
                  <i className="icon-social-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav-footer">
          <span className="copyright">
            &copy; 2023 Lucy Lu Portfolio Website.
          </span>
        </div>
      </aside>

      <div className="show-menu" onClick={() => ShowMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>

      <div
        className={toggle ? "small-menu show-side-bar" : "small-menu"}
        ref={menuRef}
      >
        <a href="#home" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="small-menu-list" onClick={() => ShowMenu(!toggle)}>
          <li className="small-menu-item">
            <a href="/" className="menu-link">
              Home
            </a>
          </li>
          <li className="small-menu-item">
            <a href="/#about" className="menu-link">
              About
            </a>
          </li>
          <li className="small-menu-item">
            <a href="/#projects" className="menu-link">
              Projects
            </a>
          </li>
          <li className="small-menu-item">
            <a href="/#experience" className="menu-link">
              Experience
            </a>
          </li>
          <li className="small-menu-item">
            <a href="/#contact" className="menu-link">
              Contact
            </a>
          </li>
          <li className="small-menu-item">
            <a
              href="https://www.linkedin.com/in/lucylu-lucy/"
              className="nav-link"
            >
              <i className="icon-social-linkedin"></i>
            </a>
          </li>

          <li className="small-menu-item">
            <a href="lucy.lu.forwork@gmail.com" className="nav-link">
              <i className="icon-envelope"></i>
            </a>
          </li>

          <li className="small-menu-item">
            <a href="0468-960-150" className="nav-link">
              <i className="icon-phone"></i>
            </a>
          </li>

          <li className="small-menu-item">
            <a href="https://github.com/xilu6510" className="nav-link">
              <i className="icon-social-github"></i>
            </a>
          </li>
        </ul>

        <div className="nav-footer">
          <span className="small-copyright">
            &copy; 2023 Lucy Lu Portfolio Website.
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

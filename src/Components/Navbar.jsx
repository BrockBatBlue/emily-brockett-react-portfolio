import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <section id="header" className="navbar-expand-sm">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-12">
            <header>
              <span className="image avatar">
                <img src="images/profile-pic.png" alt="Emily Brockett" />
              </span>
              <h1 id="logo">
                <a href="https://github.com/BrockBatBlue">Emily Brockett</a>
              </h1>
              <br></br>
              <p>
                Currently building
                <br />
                React Three Fiber apps
              </p>
            </header>
            <br></br>
            <nav id="nav" className="navbar collapse navbar-collapse">
              <ul>
                <li>
                  <a href="#about" className="active">
                    About
                  </a>
                </li>
                <li>
                  <a href="#things">Things I Can Do</a>
                </li>
                <li>
                  <a href="#accomplishments">A Few Accomplishments</a>
                </li>
                {/* <li>
                                <a href="#four">Blog</a>
                            </li> */}
              </ul>
            </nav>
            <br></br>
            <footer className="icon-footer">
              <ul className="icons">
                <li>
                  <a
                    href="https://www.linkedin.com/in/emily-brockett/"
                    class="icon brands bi-linkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="label"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/BrockBatBlue"
                    className="icon brands bi-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="label"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: emilybrockett@gmail.com"
                    class="icon solid bi-envelope"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="label"></span>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

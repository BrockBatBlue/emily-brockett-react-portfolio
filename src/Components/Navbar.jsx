import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
    return (
        <section id="header">
            <div className="container-lg">
                <div className="col-12">
                    <header>
                        <span className="image avatar">
                            <img
                                src="images/profile-pic.png"
                                alt="Emily Brockett"
                            />
                        </span>
                        <h1 id="logo">
                            <a href="https://github.com/BrockBatBlue">
                                Emily Brockett
                            </a>
                        </h1>
                        <p>
                            I got reprogrammed by a rogue AI
                            <br />
                            and now I'm totally cray
                        </p>
                    </header>
                    <nav id="nav" className="navbar">
                        <ul>
                            <li>
                                <a href="#one" className="active">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#two">Things I Can Do</a>
                            </li>
                            <li>
                                <a href="#three">A Few Accomplishments</a>
                            </li>
                            <li>
                                <a href="#four">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <footer className="icon-footer">
                        <ul className="icons">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/emily-brockett/"
                                    class="icon brands bi-linkedin"
                                >
                                    <span className="label"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/BrockBatBlue"
                                    className="icon brands bi-github"
                                >
                                    <span className="label"></span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto: emilybrockett@gmail.com"
                                    class="icon solid bi-envelope"
                                >
                                    <span className="label"></span>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </section>
    );
}

export default Navbar;

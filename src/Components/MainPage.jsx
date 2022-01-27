import React from "react";
import "../Styles/MainPage.css";

function MainPage() {
    return (
        // Wrapper
        <div id="wrapper">
            {/* Main */}
            <div id="main" className="col-8">
                {/* One */}
                <section id="one">
                    <div className="image main" data-position="center">
                        <img src="../../public/profile.pic2.JPG" alt=""></img>
                    </div>
                    <div className="container">
                        <header className="major">
                            <h2>Web Developer Portfolio</h2>
                            <p>
                                Full Stack
                                <br />
                                Web Development Projects
                                {/* <a href="http://html5up.net">HTML5 UP</a>. */}
                            </p>
                        </header>
                        <p>
                            Faucibus sed lobortis aliquam lorem blandit. Lorem
                            eu nunc metus col. Commodo id in arcu ante lorem
                            ipsum sed accumsan erat praesent faucibus commodo ac
                            mi lacus. Adipiscing mi ac commodo. Vis aliquet
                            tortor ultricies non ante erat nunc integer eu ante
                            ornare amet commetus vestibulum blandit integer in
                            curae ac faucibus integer non. Adipiscing cubilia
                            elementum.
                        </p>
                    </div>
                </section>

                {/* Two */}
                <section id="two">
                    <div className="container">
                        <h3>Things I Can Do</h3>
                        <p>
                            Integer eu ante ornare amet commetus vestibulum
                            blandit integer in curae ac faucibus integer non.
                            Adipiscing cubilia elementum integer lorem ipsum
                            dolor sit amet.
                        </p>
                        <ul className="feature-icons">
                            <li className="icon solid fa-code">
                                Write all the code
                            </li>
                            <li className="icon solid fa-cubes">
                                Stack small boxes
                            </li>
                            <li className="icon solid fa-book">
                                Read books and stuff
                            </li>
                            <li className="icon solid fa-coffee">
                                Drink much coffee
                            </li>
                            <li className="icon solid fa-bolt">
                                Lightning bolt
                            </li>
                            <li className="icon solid fa-users">
                                Shadow clone technique
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Three */}
                <section id="three">
                    <div className="container">
                        <h3>A Few Accomplishments</h3>
                        <p>
                            Integer eu ante ornare amet commetus vestibulum
                            blandit integer in curae ac faucibus integer non.
                            Adipiscing cubilia elementum integer. Integer eu
                            ante ornare amet commetus.
                        </p>
                        <div className="features">
                            <article>
                                <a href="#" className="image">
                                    <img src="images/pic01.jpg" alt="" />
                                </a>
                                <div className="inner">
                                    <h4>Possibly broke spacetime</h4>
                                    <p>
                                        Integer eu ante ornare amet commetus
                                        vestibulum blandit integer in curae ac
                                        faucibus integer adipiscing ornare amet.
                                    </p>
                                </div>
                            </article>
                            <article>
                                <a href="#" className="image">
                                    <img src="images/pic02.jpg" alt="" img />
                                </a>
                                <div className="inner">
                                    <h4>Terraformed a small moon</h4>
                                    <p>
                                        Integer eu ante ornare amet commetus
                                        vestibulum blandit integer in curae ac
                                        faucibus integer adipiscing ornare amet.
                                    </p>
                                </div>
                            </article>
                            <article>
                                <a href="#" className="image">
                                    <img src="images/pic03.jpg" alt="" />
                                </a>
                                <div className="inner">
                                    <h4>Snapped dark matter in the wild</h4>
                                    <p>
                                        Integer eu ante ornare amet commetus
                                        vestibulum blandit integer in curae ac
                                        faucibus integer adipiscing ornare amet.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Four */}
                <section id="four">
                    <div className="container">
                        <h3>My Blog</h3>
                        <p>
                            Integer eu ante ornare amet commetus vestibulum
                            blandit integer in curae ac faucibus integer non.
                            Adipiscing cubilia elementum integer. Integer eu
                            ante ornare amet commetus.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainPage;

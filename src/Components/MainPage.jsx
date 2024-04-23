import React from "react";
import "../Styles/MainPage.css";
import Card from "./Card";
import cards from "../portfolio.json";

function MainPage() {
  return (
    // Wrapper
    <div id="wrapper">
      {/* Main */}
      <div id="main" className="">
        <header className="hero">
          <div className="image main container-fluid " data-position="center">
            <img
              className="main-image"
              src="images/cover-image.png"
              alt="colorful blue banner"
            ></img>
          </div>
        </header>
        <br></br>
        {/* One */}
        <section id="one">
          <div className="col-8 container">
            <header className="major">
              <h2>I am a </h2>
              <h4>
                Full Stack
                <br />
                Web Developer
                {/* <a href="http://html5up.net">HTML5 UP</a>. */}
              </h4>
            </header>
            <p>
              I am in many ways a hobbyist: active and restless by nature. I
              have lived many lives as a horse trainer, writer, nursing
              assistant, college student with B.S. in Biology while majoring in
              Literature, literature teacher, gardening enthusiast, video game
              enthusiast, full-stack web developer, front-end web developer
              teacher, and traveler. Each has its own chapter both sequestered
              and fluid.
            </p>
          </div>
        </section>
        <hr className="container"></hr>
        {/* Two */}
        <section id="two">
          <div className="col-8 container">
            <h3>Things I Can Do</h3>
            <p>
              Here is a list of frameworks, languages, and applications I use to
              create full stack and front-end web apps:
            </p>
            <br></br>
            <ul className="feature-skills">
              <li>Handlebars</li>
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>Node</li>
              <li>React</li>
              <li>jQuery</li>
              <li>React Router</li>
              <li>React-Toastify</li>
              <li>Flexbox</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Prettier</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Mongoose</li>
              <li>Sequelize</li>
              <li>MySQL Workbench</li>
              <li>npm</li>
              <li>Express</li>
              <li>Passport</li>
            </ul>
          </div>
        </section>
        <hr className="container"></hr>
        {/* Three */}
        <section id="three">
          <div className="col-8 container">
            <h3>A Few Accomplishments</h3>
            <p>Here are some apps, full stack and frontend I've worked on.</p>
            <div className="features">
              {cards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    repoUrl={card.repoUrl}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* <hr className="container"></hr> */}
        {/* Four */}
        <section id="four">
          {/* <div className="col-8 container">
                        <h3>My Blog</h3>
                        <p>
                            Integer eu ante ornare amet commetus vestibulum
                            blandit integer in curae ac faucibus integer non.
                            Adipiscing cubilia elementum integer. Integer eu
                            ante ornare amet commetus.
                        </p> */}
          {/* <p id="additions">
            More will come! Keep an eye out for additions to the portfolio and
            page ✨
          </p> */}
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}

export default MainPage;

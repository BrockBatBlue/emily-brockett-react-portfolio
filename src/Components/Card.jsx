import React from "react";
import "../Styles/Card.css";

function Card(props) {
    return (
        <article>
            <div className="card mb-3" key={props.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={props.image}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.deployedUrl} className="card-link">
                                {props.deployedTitle}
                            </a>
                            <a href={props.repoUrl} className="card-link">
                                Github Page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Card;

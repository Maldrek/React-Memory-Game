import React from "react";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="dark-box mx-auto">
                <h1 className="display-4 text-center">React Memory Game!</h1>
                <p className="lead text-center">Click on every image once to win! If you click on an image twice, you lose!</p>
                <h3 className="text-center">Score: {props.score} | Top Score: {props.topScore}</h3>
                <h5 className="text-center">{props.message}</h5>
            </div>
        </div>
    </div>
);
export default Jumbotron;
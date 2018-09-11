import React, { Component } from "react";
import "./ScoreDisplay.css";

class ScoreDisplay extends Component {
    state = {
        message: "",
        animating: false
    };

    // show scores when players got it right, and when they make a mistake
    componentWillReceiveProps( {score, topScore} ) {
        const newState = { animating: true };
        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 0 & topScore > 0 ) {
            newState.message = "Sorry, you chose this hero already."
        } else {
            newState.message = "Excellent choice."
        }
        this.setState(newState, () =>
            setTimeout(() => this.setState({ animating: false }), 500)
        );
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You chose a hero."
            case "incorrect":
                return "You may not choose this hero again."
            default:
                return "Click the portrait of a hero to start."
        };
    };

    // Render the score message on navbar
    render() {
        return (
            <li className="this.state.animating ? this.state.message : ">
                {this.renderMessage()}
            </li>
        );
    };
};

export default ScoreDisplay;

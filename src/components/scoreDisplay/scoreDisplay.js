import React, { component } from "react";
import "./scoreDisplay.css";

class scoreDisplay extends component {
    state = {
        message: "",
        animating: false
    };

    componentWillReceiveProps( {score, topScore} ) {
        const newState = { animating: true };
        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 0 & topScore > 0 ) {
            newState.message = "Sorry, you chose this hero already."
        } else {
            newState.message = "Excellent choice."
        }
        this.setState(newStae, () =>
            setTimeour(() => this.setState({ animating: false }), 500)
        );
    }

    render() {
        return (
            <li className="this.state.animating ? this.state.message : ">
                {this.renderMessage()}
            </li>
        );
    }
}

export default scoreDisplay;

import React, { Component } from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Container from "../Container";
import Gameitem from "../Gameitem";
import Footer from "../Footer";
import data from "../../data.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0
    };

    // Loading data from a remote endpoint
    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    // Function when players play it right
    correctClick = newData => {
        const { topScore, score } = this.state;
        const updateScore = score + 1;
        const updateTopScore = updateScore > topScore ? updateScore : topScore;
        this.setState( {
            data: this.shuffleData(newData),
            score: updateScore,
            topScore: updateTopScore
        });
    };

    // Function when players play it wrong
    incorrectClick = data => {
        this.setState( {
            data: this.resetData(data),
            score: 0
        });
    };

    // After incorrect click, reset the game
    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false}));
        return this.shuffleData(resetData);
    };

    // After each click, randomly shuffle the portraits
    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        };

        return data;
    };

    itemClicked = id => {
        let correctGuess = false;
        const newData = this.state.data.map(item => {
            const newItem = {...item};
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correctGuess = true;
                };
            };

            return newItem;
        });

        correctGuess
            ? this.correctClick(newData)
            : this.incorrectClick(newData);
    }; 

    // Finally, render the score displays on navbar
    render() {
        return (
            <div>
                <Navbar score={ this.state.score } topScore={ this.state.topScore }/>
                <Header />
                <Container>
                    {this.state.data.map(item => (
                        <Gameitem
                            key={item.id}
                            id={item.id}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.itemClicked}
                            image={item.image}
                    />
                    ))}
                </Container>
                <Footer />
            </div>
        );
    };
};

export default Game;

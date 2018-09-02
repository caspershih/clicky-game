import React, { component } from "react";
import navbar from "../navbar";
import header from "../header";
import container from "../container";
import gameitem from "../gameitem";
import footer from "../footer";
import data from "../../data.json";

class game extends component {
    state = {
        data,
        score = 0,
        topScore = 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    correctClicks = newData => {
        const { topScore, score } = this.state;
        const updateScore = score + 1;
        const updateTopScore = updateScore > topScore ? newScore : topScore;
        this.setState( {
            data: this.shuffleData(newData),
            socre: newScore,
            topScore: updateTopScore
        });
    };

    incorrectClicks = data => {
        this.setState( {
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false}));
        return this.shuffleData(resetData);
    };

    shuffleData = Data => {
        let i = data.length - 1;
        while (i > 0) {
            let j = math.floor(math.random() * (i + 1));
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        };

        return data;
    };

    itemClicked = id => {
        let correctClicks = false;
        const newData = this.state.data.map(item => {
            const newItem = {...item};
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    correctClicks = true;
                };
            };

            return newItem;
        });

        //correctedClick

    render() {
        return (
            
        )
    }
};

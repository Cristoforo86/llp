import React, { Component } from "react";
import axios from "axios";

class ItalianWordsA1Numbers extends Component {
    constructor() {
        super();
        this.state = {
            words: [],
            word: {}
        };
    }

    async componentDidMount() {
        const res = await axios.get(
            "http://localhost/portfolio/language/public/italian/vocabulary/list/a1"
        );
        this.setState({ words: res.data }, () => {
            console.log(this.state.words);
        });
    }

    render() {
        const ulStyle = {
            background: "transparent"
        };
        return (
            <ul
                className="list-group list-group-flush bg-transparent"
                style={ulStyle}
            >
                {this.state.words ? (
                    this.state.words.map(x => (
                        <li
                            key={x.id}
                            className="list-group-item bg-transparent"
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">{x.word_IT}</div>
                                    <div className="col-sm">{x.word_EN}</div>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>Loading</li>
                )}
            </ul>
        );
    }
}

export default ItalianWordsA1Numbers;

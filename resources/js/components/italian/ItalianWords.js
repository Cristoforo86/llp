import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

//Components
import ItalianWordsA1 from "./ItalianWordsA1";
import ItalianWordsA2 from "./ItalianWordsA2";
import ItalianWordsB1 from "./ItalianWordsB1";

export default class ItalianWords extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         words: [],
    //         word: {},
    //     };
    // }

    // getWordsItA1 = async () => {
    //     const res = await axios.get(
    //         "http://localhost/portfolio/language/public/italian/vocabulary/list/a1"
    //     );
    //     this.setState({ words: res.data }, () => {
    //         console.log(this.state.words);
    //     });
    // };

    render() {
        return (
            <React.Fragment>
                <Router>
                    <div className="container">
                        <div className="text-center">
                            <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <Link
                                    to="/italianA1"
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.getWordsItA1}
                                >
                                    A1
                                </Link>
                                <Link
                                    to="/italianA2"
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.getWordsItA2}
                                >
                                    A2
                                </Link>
                                <Link
                                    to="/italianB1"
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.getWordsItB1}
                                >
                                    B1
                                </Link>
                            </div>
                        </div>

                        <Route
                            path="/italianA1"
                            component={ItalianWordsA1}
                            exact
                        />
                        <Route
                            path="/italianA2"
                            component={ItalianWordsA2}
                            exact
                        />
                        <Route
                            path="/italianB1"
                            component={ItalianWordsB1}
                            exact
                        />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

if (document.getElementById("italianWords")) {
    ReactDOM.render(<ItalianWords />, document.getElementById("italianWords"));
}

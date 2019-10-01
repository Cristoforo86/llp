import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

//Components
import ItalianWordsA1Numbers from "./ItalianWordsA1Numbers";

export default class ItalianWordsA1 extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Link to="/italianA1/numbers">
                                    <h1>Numbers</h1>
                                </Link>
                                <h1>Colours</h1>
                                <h1>Months</h1>
                            </div>
                            <div className="col-md">
                                <Route
                                    path="/italianA1/numbers"
                                    component={ItalianWordsA1Numbers}
                                    exact
                                />
                            </div>
                        </div>
                    </div>
                </Router>
            </Fragment>
        );
    }
}

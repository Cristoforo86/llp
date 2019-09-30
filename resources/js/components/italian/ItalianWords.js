import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class ItalianWords extends Component {
    constructor() {
        super();
        this.state = {
            words: [],
            word: {}
        };
    }

    // getWordsItA1 = () => {
    //     console.log("test");
    // };

    render() {
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Example Component</div>

                            <div class="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button
                            type="button"
                            class="btn btn-secondary"
                            onClick={this.getWordsItA1}
                        >
                            A1
                        </button>
                        <button type="button" class="btn btn-secondary">
                            A2
                        </button>
                        <button type="button" class="btn btn-secondary">
                            B1
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("italianWords")) {
    ReactDOM.render(<ItalianWords />, document.getElementById("italianWords"));
}

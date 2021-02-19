import React, { Component } from "react";
import { connect } from "react-redux";

import { newWord } from "../store/actions";

export class NewWordButton extends Component {
    onButtonClickHandler = () => {
        this.props.startNewGame();
    }

    render() {
        return <button onClick={this.onButtonClickHandler} >New Word</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startNewGame: () => dispatch(newWord())
    }
}

export default connect(null, mapDispatchToProps)(NewWordButton);
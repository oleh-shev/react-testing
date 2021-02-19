import React, { Component } from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";

class Input extends Component {

    state = {
       currentGuess: ''
    }

    submitGuessedWord = event => {
        event.preventDefault();
        const guessedWord = this.state.currentGuess;

        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
        }

        this.setState({ currentGuess: '' });
    }

    render() {
        const content = !this.props.success && (
            <form className="form-inline">
                <input
                    type="text"
                    data-test="input-box"
                    className="mb-2 mx-xm-3"
                    placeholder="enter guess"
                    value={this.state.currentGuess}
                    onChange={event => this.setState({ currentGuess: event.target.value })}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={event => this.submitGuessedWord(event)}
                    type="submit"
                >Submit</button>
            </form>
        )
        return (
            <div data-test="component-input">
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

const mapDispatchToProps = dispatch => {
    return {
        guessWord: (guessedWord) => dispatch(actions.guessWord(guessedWord))
    }
}

export const UnconnectedInput = Input;

export default connect(mapStateToProps, mapDispatchToProps)(Input);
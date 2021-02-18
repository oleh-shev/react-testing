import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';
import Congrats from "./components/Congrats";
import GuessedWords from "./components/GuessedWords";
import Input from "./components/Input";
import * as actions from './store/actions';

export class UnconnectedApp extends Component {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        return (
            <div data-test="component-app" className="container">
                <h1>Jotto</h1>
                <Congrats success={this.props.success}/>
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { success, guessedWords, secretWord } = state;
    return { success, guessedWords, secretWord };
};

const mapDispatchToProps = dispatch => {
  return {
      getSecretWord: () => dispatch(actions.getSecretWord())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

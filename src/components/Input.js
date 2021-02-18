import React from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";

class Input extends React.Component {
    render() {
        const content = !this.props.success && (
            <form className="form-inline">
                <input
                    type="text"
                    data-test="input-box"
                    className="mb-2 mx-xm-3"
                    placeholder="enter guess"
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={() => this.props.guessWord('train')}
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
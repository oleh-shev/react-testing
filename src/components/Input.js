import React from "react";
import {connect} from "react-redux";

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

export default connect(mapStateToProps)(Input);
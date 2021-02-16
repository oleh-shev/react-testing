import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    const content = guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
            Try to guess the secret word!
        </span>
    ) : (
        <div></div>
    )
    return (
        <div data-test="component-guessed-words">
            {content}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;

import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    const content = guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
            Try to guess the secret word!
        </span>
    ) : (
        <div data-test="guessed-words">
            <h3>Guessed Words</h3>
            <table className="table table-sm">
                <thead className="thead-light">
                <tr>
                    <th>Matching Letters</th>
                </tr>
                </thead>
                <tbody>
                    {guessedWords.map(
                        (word, index) => (
                            <tr
                                data-test="guessed-word"
                                key={index}
                            >
                                <td>{word.guessedWord}</td>
                                <td>{word.letterMatchCount}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
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

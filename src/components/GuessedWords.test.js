import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [
        {
            guessedWord: 'train',
            letterMatchCount: 3
        }
    ]
};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test('should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('<Congrats /> component if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })

    it('should renders without error', () => {
        const component = findByTestAtrr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    it('should renders instructions to guess a word', () => {
        const instructions = findByTestAtrr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('Congrats component if there are words guessed', () => {
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5}
    ];

    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })

    it('should renders without error', () => {
        const component = findByTestAtrr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('should render "guessed words" section', () => {
        const guessedWordsNode = findByTestAtrr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    it('should display correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAtrr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});

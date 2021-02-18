import React from "react";
import {shallow} from "enzyme";

import {storeFactory} from "./test/testUtils";
import App, { UnconnectedApp } from "./App";

const setup = (state={}) => {
    const store = storeFactory(state);
    return shallow(<App store={store}/>).dive().dive();
};

describe('<App />', () => {
    it('should have access to success state', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    it('should have access to secretWord state', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });

    it('should have access to guessedWord state', () => {
        const guessedWords = [
            { guessedWord: 'train', letterMatchCount: 3 }
        ];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    });

    it('should have access to getSecretWord action creator as a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.getSecretWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });

    it('should run getSecretWord function on Component mount', () => {
        const getSecretWordMock = jest.fn();

        const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: []
        }

        const wrapper = shallow(<UnconnectedApp {...props} />);
        wrapper.instance().componentDidMount();

        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordCallCount).toBe(1);
    });
});

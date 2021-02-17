import React from "react";
import {shallow} from "enzyme";

import {storeFactory} from "./test/testUtils";
import App from "./App";

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
});

import moxios from 'moxios';

import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./secretWord";

describe('secretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should add response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            })
    });
});
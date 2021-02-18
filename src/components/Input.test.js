import React from "react";
import {shallow} from "enzyme";

import {findByTestAtrr, storeFactory} from "../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

const setup = initialState => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store}/>).dive().dive();
};

describe('<Input/>', () => {
   describe('when word has not been guessed', () => {
       let wrapper;

       beforeEach(() => {
           const initialState= { success: false}
           wrapper = setup(initialState);
       });

       it('should render component without error', () => {
            const component = findByTestAtrr(wrapper, 'component-input');
            expect(component.length).toBe(1);
       });

       it('should render input box', () => {
           const inputBox = findByTestAtrr(wrapper, 'input-box');
           expect(inputBox.length).toBe(1);
       });

       it('should render submit button', () => {
           const submitButton = findByTestAtrr(wrapper, 'submit-button');
           expect(submitButton.length).toBe(1);
       });
   });

   describe('when word has been guessed', () => {
       let wrapper;

       beforeEach(() => {
           const initialState= { success: true}
           wrapper = setup(initialState);
       });

       it('should render component without error', () => {
           const component = findByTestAtrr(wrapper, 'component-input');
           expect(component.length).toBe(1);
       });

       it('should not render input box', () => {
           const inputBox = findByTestAtrr(wrapper, 'input-box');
           expect(inputBox.length).toBe(0);
       });

       it('should not render submit button', () => {
           const submitButton = findByTestAtrr(wrapper, 'submit-button');
           expect(submitButton.length).toBe(0);
       });
   });

   describe('redux props', () => {
       it('should have success piece of state as prop', () => {
           const success = true;
           const wrapper = setup({ success });
           const successProp = wrapper.instance().props.success;
           expect(successProp).toBe(success);
       });

       it('should have guessWord action creator as a function prop', () => {
           const wrapper = setup();
           const guessWordProp = wrapper.instance().props.guessWord;
           expect(guessWordProp).toBeInstanceOf(Function);
       });
   });

   describe('guessWord action creator', () => {
       it('should be called when button is clicked', () => {
           const guessWordMock = jest.fn();
           const props = {
               guessWord: guessWordMock,
               success: false
           };
           const wrapper = shallow(<UnconnectedInput {...props} />);
           const button = findByTestAtrr(wrapper, 'submit-button');

           button.simulate('click');

           const guessWordCallCount = guessWordMock.mock.calls.length;

           expect(guessWordCallCount).toBe(1);
       });
   })
});
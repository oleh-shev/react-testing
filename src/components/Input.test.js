import React from "react";
import {shallow} from "enzyme";

import {findByTestAtrr, storeFactory} from "../test/testUtils";
import Input from "./Input";

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
   })
});
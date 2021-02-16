import React from "react";
import {shallow} from "enzyme";

import {storeFactory} from "../test/testUtils";
import Input from "./Input";

const setup = initialState => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store}/>).dive().dive();
};

describe('<Input/>', () => {
   describe('when word has not been guessed', () => {
       it('should render input box', () => {
            setup()
       });

       it('should render submit button', () => {

       });
   });

   describe('when word has been guessed', () => {
       it('should not render input box', () => {

       });

       it('should not render submit button', () => {

       });
   })
});
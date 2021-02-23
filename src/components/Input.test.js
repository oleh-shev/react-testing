import React from "react";
import { shallow } from "enzyme";
import {checkProps, findByTestAtrr} from "../test/testUtils";
import Input from "./Input";

const setup = (secretWord='party') => {
    return shallow(<Input secretWord={secretWord} />);
};

describe('<Input />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it('should be rendered without error', () => {
        const component = findByTestAtrr(wrapper, 'input-component');
        expect(component.length).toBe(1);
    });

    it('should get prop with correct type', () => {
        checkProps(Input, { secretWord: 'party' });
    });
});
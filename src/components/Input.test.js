import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../test/testUtils";
import Input from "./Input";

const setup = () => {
    return shallow(<Input />);
};

describe('<Input />', () => {
    it('should be rendered without error', () => {
        const wrapper = setup();
        const component = findByTestAtrr(wrapper, 'input-component');
        expect(component.length).toBe(1);
    });
});
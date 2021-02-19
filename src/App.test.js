import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from "./test/testUtils";
import App from './App';

const setup = () => {
    return shallow(<App />);
};

describe('<App />', () => {
    it('should be rendered without error', () => {
        const wrapper = setup();
        const component = findByTestAtrr(wrapper, 'component-app');
        expect(component.length).toBe(1);
    });
});
